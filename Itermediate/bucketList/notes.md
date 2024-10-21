Building an API

consuming an api:
1. THEY decide the endpoints
2. THEY decide how the data is sent (JSON / XML)
3. THEY decide how much data to send (everything or one thing)
4. THEY decide what the data looks like

Rules for building an API
1. WE decide the endpoints
2. WE decide how the data is sent (JSON / XML)
3. WE decide how much data to send (everything or one thing)
4. WE decide what the data looks like

Restricitons:
Routes must be: 
    /api/items
    /api/items/<unique identities>

Data {
    id: number,
    description: String,
    is_complete: Boolean
}

Must be CRUD (Create, Read, Update, Delete) functional

CRUD:

R:  read
1.  Route - /api/items - use GET method
2.  JSON
3.  recipet - get everything
4.  Get an array of objects (can change)

C:  create
1.  Route - /api/items - use POST Method
        get data from client
        database sends something back
2.  JSON -> to client
3.  recipt - Send back one thing
4.  One object - data, reciept from database
    * when data is sent from the client to server, it is usually sent as a POST Request in the 'body'

D: delete
1.  Route - /api/items/<unique>, DELETE method
2.  JSON
3. reciept - what was deleted
4. one object

U: update
1. Route - /api/items/<unique>, PUT method
        what is being updated
2. JSON
3. reciept - what was updated
4. send back an object or just is_complete