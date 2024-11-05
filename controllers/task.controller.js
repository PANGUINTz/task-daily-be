import taskModel from "../models/tasks.model.js";

const TaskController = {
  getAllTasks: (req, res) => {
    taskModel.getAllTasks((err, tasks) => {
      if (err) {
        return res.status(500).send({ status: false, error: err });
      }
      res.send({ status: true, message: "success", data: tasks });
    });
  },

  getTaskById: (req, res) => {
    const { id } = req.params;
    taskModel.getTasksById(id, (err, task) => {
      if (err) {
        return res.send({ status: false, error: err });
      }
      res.send({ status: true, message: "success", data: task });
    });
  },

  createTask: (req, res) => {
    const data = req.body;
    taskModel.createTasks(data, (err, task) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.send({ status: true, message: "success", data: task });
    });
  },

  updateTask: (req, res) => {
    const data = req.body.data;
    const { id } = req.params;
    console.log(id);
    console.log(data);

    taskModel.updateTask(data, id, (err, task) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.send({ status: true, message: "success", data: task });
    });
  },

  updateTaskStatus: (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    console.log(status);

    taskModel.updateTaskStatus(status, id, (err, task) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.send({ status: true, message: "success", data: task });
    });
  },

  deleteTask: (req, res) => {
    const { id } = req.params;
    console.log(id);

    taskModel.deleteTask(id, (err, task) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.send({ status: true, message: "success", data: task });
    });
  },
};

export default TaskController;
