"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _todo = _interopRequireDefault(require("../services/todo.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//GET
const index = (request, response) => {
  const promise = _todo.default.search();

  promise.then(todos => {
    response.status(200);
    response.json(todos);
  }).catch(handleError(response));
}; // CREATE


const save = (request, response) => {
  const todo = { ...request.body
  };

  if (!request.body.title) {
    response.status(400).send({
      message: "Title cannot be empty"
    });
    return;
  }

  const promise = _todo.default.save(todo);

  promise.then(newTodo => {
    response.status(200);
    response.json(newTodo);
  }).catch(handleError(response));
}; //GET BY ID


const get = (request, response) => {
  const id = request.params.id;

  const promise = _todo.default.get(id);

  promise.then(todo => {
    response.status(200);
    response.json(todo);
  }).catch(handleError(response));
}; //UPDATE


const update = (request, response) => {
  const body = { ...request.body
  };

  if (!request.body) {
    response.status(400).send({
      message: "Data to update can not be empty!"
    });
    return;
  }

  body.lastModified = Date.now();
  const id = request.params.id;

  const promise = _todo.default.update(id, body);

  promise.then(todo => {
    response.status(200);
    response.json(todo);
  }).catch(handleError(response));
}; //DELETE


const remove = (request, response) => {
  const id = request.params.id;

  const promise = _todo.default.remove(id);

  promise.then(todo => {
    response.status(200);
    response.json({
      "message": "Deleted the item successfully"
    });
  }).catch(handleError(response));
}; // ERROR HANDLING


const handleError = response => {
  return error => {
    response.status(500);
    response.json({
      message: error.message
    });
  };
};

var _default = {
  index: index,
  save: save,
  get: get,
  update: update,
  remove: remove
};
exports.default = _default;