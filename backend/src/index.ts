import express from 'express';
import router from './routes/routes';

const app = express();
const port = 4000;

// JSON middleware
app.use(express.json());

// parse URL encoded strings
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// No route was taken - 404 - Resource (API endpoint) not found.
app.use((_req, res) => {
  const response = {
    status: 'failure',
    data: {},
    error: 'No matching endpoint was found.',
  };

  return res.status(404).send(response);
});

app.listen(port, () => {
  console.log(
    `[${new Date().toISOString()}] RESTful API listening on port ${port}`
  );
});