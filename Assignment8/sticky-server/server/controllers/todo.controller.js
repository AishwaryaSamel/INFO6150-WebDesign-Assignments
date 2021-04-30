import todoService from '../services/todo.service';

//GET
const index = (request, response) => {
    const promise = todoService.search();
    promise.then((todos) => {
        response.status(200);
        response.json(todos);
    }).catch(handleError(response));
}

// CREATE
const save = (request, response) => {
    const todo = {...request.body};
    if (!request.body.title) {
        response.status(400).send({ message: "Title cannot be empty" });
        return;
    }
    const promise = todoService.save(todo);
    promise.then((newTodo) => {
        response.status(200);
        response.json(newTodo);
    }).catch(handleError(response));
}

//GET BY ID
const get = (request, response) => {
    const id = request.params.id;
    const promise = todoService.get(id);
    promise.then((todo) => {
        response.status(200);
        response.json(todo);
    }).catch(handleError(response));
}

//UPDATE
const update = (request, response) => {
    const body = {...request.body};
    if (!request.body) {
        response.status(400).send({
          message: "Data to update can not be empty!"});
        return;
    }
    body.lastModified = Date.now();
    const id = request.params.id;
    const promise = todoService.update(id,body);
    promise.then((todo) => {
        response.status(200);
        response.json(todo);
    }).catch(handleError(response));
}

//DELETE
const remove = (request, response) => {
    const id = request.params.id;
    const promise = todoService.remove(id);
    promise.then((todo) => {
        response.status(200);
        response.json({
            "message":"Deleted the item successfully"
        });
    }).catch(handleError(response));
}

// ERROR HANDLING
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    save: save,
    get: get,
    update: update,
    remove: remove
}
