ASSIGNMENT 8

TO-DO APPLICATION
This is a simple Nodejs/Express REST API for a simple todo app.

Instruction to run -
-open terminal on Visual Studio Code
-run command npm init
-npm run watch:dev
-connect to the database (open terminal on mac and type "mongo" and connect to it using compass, once it is started)
-once the database is connected, open postman
-then give the following queries on postman


Sample Data - 
1) POST REQUEST - http://localhost:3000/todo

Body - 
    {
        "title": "wed des project meeting",
        "desc": "attend meeting",
        "createdOn": "2020-03-10T14:28:31.719Z",
        "lastModified": "2020-03-11T14:28:31.719Z",
    }

      {
        "title": "AED",
        "desc": "Attend lecture"
    }

2) GET REQUEST - http://localhost:3000/todo    
Returns all the items

3) GET REQUEST - http://localhost:3000/todo/id
Returns items of the specific id

4) PUT REQUEST - http://localhost:3000/todo/id
Modifes the specified id with the data in the body

Body - 
{
    "title": "App Engg Dev"
}

5) DELETE REQUEST - http://localhost:3000/todo/id
Deletes the data with the specified id 









