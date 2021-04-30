"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TodoSchema = new _mongoose.default.Schema({
  //title for the Todo Object
  title: {
    type: String,
    required: "Title is a required property."
  },
  //description for the Todo Object
  desc: {
    type: String
  },
  //createdOn for the Todo Object
  date: {
    type: Date,
    default: Date.now
  },
  //time for the Todo Object
  time: {
    type: String
  },
  //lastModifiedDate for the Todo Object
  lastModified: {
    type: Date,
    default: Date.now
  }
}, {
  // timestamps: true,
  versionKey: false
}); //A virtual property named id will be copied and converted into hexa-decimal string

TodoSchema.virtual('id').get(function () {
  return this._id.toHexString();
}); // Converting the virtual id to JSON

TodoSchema.set('toJSON', {
  virtuals: true
}); // const model = mongoose.model('TodoList', TodoSchema);

const model = _mongoose.default.model('todo', TodoSchema);

var _default = model;
exports.default = _default;