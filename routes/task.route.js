import taskController from "../controllers/task.controller.js";
export default (router) => {
  router.get("/task", taskController.getAllTasks);
  router.get("/task/:id", taskController.getTaskById);
  router.post("/task", taskController.createTask);
  router.put("/task/:id", taskController.updateTask);
  router.patch("/task/:id", taskController.updateTaskStatus);
  router.delete("/task/:id", taskController.deleteTask);
};
