from fastapi import FastAPI

app = FastAPI() # FastAPI() = un instance de l'application fastapi

fakeDataBase = {
    1:{"Let's go man"},
    2:{"don't give up"},
    3:{"In the end you are the best"},
}

@app.get("/") # est un décorateur qui signifie que si la requète GET est effectuer sur une route racine ("/"), la fonction sera executé
def getItems():
    return fakeDataBase

@app.get("/{id}")
def getItem(id:int):
    return fakeDataBase