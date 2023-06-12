from fastapi import FastAPI
from database import db

app = FastAPI() 


@app.get("/") 
def getRoutes():
    return 

@app.get("/")
def getNotes():
    return 


