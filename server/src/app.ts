import express from 'express';

const app = express();

app.get('/', (req, resp) => {
  resp.status(200).json({
    message: 'All good!'
  });
});

export const sum = (a:number, b:number) => {
  return a + b;
};

export const httpServer = app.listen('3000', () => {
  console.log('Server listening port 3000...');
});