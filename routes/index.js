import express from "express";

import task from "./task.route.js";

const router = express();

export default () => {
  task(router);
  return router;
};
