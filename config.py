import os
from dotenv import load_dotenv
from TG import TgManager

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
CHAT_ID = os.getenv("CHAT_ID")
CAPTCHA_TOKEN = os.getenv("CAPTCHA_TOKEN")

TG_MANAGER = TgManager(
    token=BOT_TOKEN,
    chatId=CHAT_ID,
)