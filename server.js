import express from 'express';
import bodyParser from 'body-parser';

// Server
const app = express();

// Port
const PORT = process.env.Port || 3000;

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/', (req, res) => {
  res.status(200).send({
    message: 'Api Successfully running',
    status: true,
  });
});

module.exports = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on Port ${PORT}`);
});
