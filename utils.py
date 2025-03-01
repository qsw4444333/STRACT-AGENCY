import aiohttp
from dto import RequestModel
from config import TG_MANAGER, CAPTCHA_TOKEN


async def format(ip: str, data: RequestModel) -> str:
    return f"""<b>Новая заявка</b>
<code>{ip}</code>\n
<b>Номер телефона</b>: <code>{data.phone}</code>
<b>Комментарий</b>: {data.comment if data.comment else ''}\n
<pre>Новая заявка
<code>{ip}</code>\n
Номер телефона: <code>{data.phone}</code>
Комментарий:
{data.comment if data.comment else ''}  
</pre>
<b><i>STRACT AGENCY</i></b>
"""

async def captcha(ip: str, clientToken: str) -> bool:
    url = "https://www.google.com/recaptcha/api/siteverify"
    data = {
        "secret": CAPTCHA_TOKEN,
        "response": clientToken,
        "remoteip": ip,
    }

    try:
        async with aiohttp.ClientSession() as session:
            response = await session.post(url, data=data)
            response = await response.json()

            print(response)

            if "success" in response and response["success"]:
                if "score" in response:
                    if "hostname" in response and response["hostname"] == "avitologstract.ru":
                        return response["score"] >= 0.75

        return False
    except Exception as e:
        print(e)
        return False

