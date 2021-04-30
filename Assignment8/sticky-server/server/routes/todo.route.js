import express from 'express';
import todoController from '../controllers/todo.controller';

const router = express.Router();

//express framework for developing the endpoints.

/** URLs
 * Search all the tasks - GET /todo
 * Create task - POST /todo
 */

router.route('/todo')
    .get(todoController.index)
    .post(todoController.save);

/** URLs
 * Retrieve task by id - GET /todo/${id}
 * Update task by id - PUT /todo/${id}
 * Delete task by id - DELETE /todo/${id}
 */
router.route('/todo/:id')
    .get(todoController.get)
    .put(todoController.update)
    .delete(todoController.remove);

export default router;
