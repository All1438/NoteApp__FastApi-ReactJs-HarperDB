from fastapi import FastAPI, Body
from database import db
# from typing import List

app = FastAPI() 

@app.get("/")
def getRoutes():
    return ["/notes", "/notes<ID>"]

@app.get("/notes")
def getNotes():
    # notes = db.search_by_value('notes_app', 'notes', 'id', get_attributes=['*'])
        # db.search_by_value() = est utilisé pour rechercher des valeurs dans la base de données 'notes_app', en utilisant la clé 'id' comme critère
        #get_attributes=['*'] = signifie que tous les attributs de chaque enregistrement trouvé sera retourné
        # les resultat de la recherche sera stocké dans la variable notes
    notes = db.sql('SELECT * FROM notes_app.notes ORDER BY __updatedtime__ DESC')
        # cette requête séléctionne toutes les colonnes ('*') de la table 'notes' dans le schémas 'notes_app',
        # trié ('ORDER BY) en fonction de la colonne '__updatetime__' dans l'ordre décroissant 'DESC'
    return notes

@app.get("/notes/{id}")
def getNote(pk:str): #pk:str = ce paramètre représente la valeur de la variable de chemain "id" extrait de l'URL
    notes = db.search_by_hash('notes_app', 'notes', [pk])
    # search_by_hash() = elle recherche des valeurs dans la base de données "notes_app" de la table note, qui correspond a la  valeur de la clé primaire de hash spécifier par [pk], attend une valeur clé primaire
    return notes[0]

@app.post("/notes")
def addNote(data = Body()): # Body() = permet gérer l'analyse auto du corps de la requête
    print('Data:', data) # affiche les contenue de la variable "data" dans le console, data = (request body)
    db.insert('notes_app', 'notes', [{"body":data['body']}]) # db.insert = est appelé pour insérer les données 'data['body']
    # notes = db.search_by_value("notes_app", "notes", "id", "*", get_attributes=['*'])
    notes = db.sql('SELECT * FROM notes_app.notes')
    return notes

@app.put("/notes/{id}")
def updateNote(pk:str, data = Body()):
    db.update('notes_app', 'notes', [{"id":pk, "body":data['body']}])
    notes = db.search_by_value('notes_app', 'notes', 'id', "*", get_attributes=['*'])
    return notes

@app.delete("/notes/{id}")
def deleteNote(pk:str):
    db.delete("notes_app", "notes", [pk])
    notes = db.search_by_value("notes_app", "notes", "id", "*", get_attributes=['*'])
    return notes


