import os
from dotenv import load_dotenv
from TG import TgManager

load_dotenv()

del os.environ["BOT_TOKEN"]
del os.environ["CHAT_ID"]

BOT_TOKEN = os.getenv("BOT_TOKEN")
CHAT_ID = os.getenv("CHAT_ID")

TG_MANAGER = TgManager(
    token=BOT_TOKEN,
    chatId=CHAT_ID,
)