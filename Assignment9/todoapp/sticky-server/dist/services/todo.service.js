"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _todo = _interopRequireDefault(require("../controllers/todo.controller"));

var _todo2 = _interopRequireDefault(require("../models/todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//return all the items
const search = params => {
  const promise = _todo2.default.find(params).exec();

  return promise;
}; //create the new todo item.


const save = newTodo => {
  const todo = new _todo2.default(newTodo);
  const promise = todo.save();
  return promise;
}; //search for item by id


const get = id => {
  const promise = _todo2.default.findById(id).exec();

  return promise;
}; // Updates an existing todo item by id


const update = (id, updatedTodo) => {
  let currentDate = new Date();
  let putObj = currentDate.getDate();
  _todo2.default.lastModified = currentDate;

  const promise = _todo2.default.findOneAndUpdate({
    _id: id
  }, updatedTodo, {
    new: true
  }).exec();

  return promise;
}; //Deletes an item by id


const remove = id => {
  const promise = _todo2.default.findByIdAndRemove({
    _id: id
  }).exec();

  return promise;
};

var _default = {
  search: search,
  save: save,
  get: get,
  update: update,
  remove: remove
};
exports.default = _default;