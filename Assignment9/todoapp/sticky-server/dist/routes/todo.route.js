"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _todo = _interopRequireDefault(require("../controllers/todo.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); //express framework for developing the endpoints.

/** URLs
 * Search all the tasks - GET /todo
 * Create task - POST /todo
 */


router.route('/todo').get(_todo.default.index).post(_todo.default.save);
/** URLs
 * Retrieve task by id - GET /todo/${id}
 * Update task by id - PUT /todo/${id}
 * Delete task by id - DELETE /todo/${id}
 */

router.route('/todo/:id').get(_todo.default.get).put(_todo.default.update).delete(_todo.default.remove);
var _default = router;
exports.default = _default;