import { Router } from 'express';
import { DUMMY_TASKS } from '../utils/dummyTasks';

const router = Router();

router.get('/', (req, res) => {
  return res.json(DUMMY_TASKS);
});

export default router;