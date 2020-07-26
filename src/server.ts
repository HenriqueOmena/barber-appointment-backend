import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'working' }));

app.listen(3333, () => {
  console.log('server rodando');
});
