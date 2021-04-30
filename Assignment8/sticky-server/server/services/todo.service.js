import todoController from '../controllers/todo.controller';
import Todo from '../models/todo';

//return all the items
const search = (params) => {
    const promise = Todo.find(params).exec();
    return promise;
}

//create the new todo item.
const save = (newTodo) => {
    const todo = new Todo(newTodo);
    const promise = todo.save();
    return promise;
}

//search for item by id
const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}

// Updates an existing todo item by id
const update = (id,updatedTodo) => {
    let currentDate = new Date();
    let putObj = currentDate.getDate();
    Todo.lastModified = currentDate;
    console.log("hey "+ Todo.lastModified);
    const promise = Todo.findOneAndUpdate(
        {_id: id,},
        updatedTodo,
        { new: true }
    ).exec();
    return promise;
}

//Deletes an item by id
const remove = (id) => {
    const promise = Todo.findByIdAndRemove(
        {_id: id }).exec();
    return promise;
}

export default {
    search: search,
    save: save,
    get: get,
    update: update,
    remove: remove
}
