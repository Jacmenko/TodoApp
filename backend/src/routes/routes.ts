import { Router } from 'express';
import dummyTasks from '../utils/dummyTasks.json';

const router = Router();

router.get('/', (req, res) => {
  return res.json(dummyTasks);
});

export default router;