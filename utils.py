import asyncio
from dto import RequestModel
from config import TG_MANAGER


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
