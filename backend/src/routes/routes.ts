import { Router } from "express";
import dummyTasks from "../../static/dummyTasks.json";

const router = Router();

router.get("/", (req, res) => res.status(200).send(dummyTasks));

export default router;
