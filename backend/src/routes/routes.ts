import { Router } from 'express';
import dummyTasks from '../utils/dummyTasks.json';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).send(JSON.parse(dummyTasks.tasks.toString()));
});

export default router;