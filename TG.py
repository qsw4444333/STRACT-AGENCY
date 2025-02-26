import aiohttp


class TgManager:
    def __init__(self, token: str, chatId: str):
        self.token: str = token
        self.chatId: str = chatId
        self.url = f"https://api.telegram.org/bot{token}/sendMessage"

    async def send(self, message: str, parseMode: str = 'HTML') -> int:
        payload = {"text": message,
                   "parse_mode": parseMode,
                   "chat_id": self.chatId}

        async with aiohttp.ClientSession() as session:
            response = await session.post(self.url,
                                          data=payload,
                                          ssl=False)
            return response.status