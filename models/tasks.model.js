import db from "../config/db.js";

const createTasksTable = `CREATE TABLE IF NOT EXISTS tasks (
id INT AUTO_INCREMENT PRIMARY KEY,
task_name VARCHAR(100) NOT NULL, 
start_date DATE NOT NULL,
finish_time TIME NULL,
status ENUM('todo', 'in-progress', 'done') NOT NULL DEFAULT 'todo',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db.query(createTasksTable, (err, result) => {
  if (err) {
    console.log("Error creating tasks table:", err);
    return;
  }
  console.log("Tasks table created or already exists.");
});

const taskModel = {
  getAllTasks: async (callback) => {
    const query = "SELECT * FROM tasks";
    db.query(query, (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  },

  getTasksById: async (id, callback) => {
    const query = "SELECT * FROM tasks where id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result[0]);
    });
  },

  createTasks: async (task, callback) => {
    const query =
      "INSERT INTO tasks(task_name, start_date, finish_time) VALUES(?,?,?)";
    db.query(
      query,
      [task.task_name, task.start_date, task.finish_time],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      }
    );
  },

  updateTask: async (task, id, callback) => {
    const query =
      "UPDATE tasks SET task_name = ? , start_date = ?, finish_time = ?, status = ? WHERE id = ?";
    db.query(
      query,
      [task.task_name, task.start_date, task.finish_time, task.status, id],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      }
    );
  },

  updateTaskStatus: async (status, id, callback) => {
    const query = "UPDATE tasks SET status = ? WHERE id = ?";
    console.log(status);

    db.query(query, [status, id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  },

  deleteTask: (id, callback) => {
    const query = "DELETE FROM tasks WHERE id = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.affectedRows);
    });
  },
};

export default taskModel;
