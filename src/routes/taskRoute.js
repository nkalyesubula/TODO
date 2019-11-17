import express from "express";
import Task from "../controllers/task/managetasks";

const router = express.Router();

router.post("/api/tasks", Task.addTask);
router.delete("/api/tasks/:id", Task.deleteTask);
router.get("/api/tasks", Task.getAllTasks);
export default router;
