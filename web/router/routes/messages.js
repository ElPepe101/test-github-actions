/* eslint-disable import/prefer-default-export */
import { Router } from 'express';

const messages = Router();

messages.get('/list', (req, res) => {
  console.log('inside route!');
  res.json({ success: true });
});

export { messages };
