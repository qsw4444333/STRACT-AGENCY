from typing import Optional
from pydantic import BaseModel, Field


class RequestModel(BaseModel):
    phone: Optional[str] = Field(min_length=18,
                                 max_length=18)
    comment: Optional[str] = Field(default=None,
                                   max_length=1000)
    token: Optional[str] = Field(min_length=1)