import express from 'express';
import cors from 'cors';
import {
  offerSearchByGroup,
  offerByRecent,
  offerById,
  addOffer,
} from './routes';
import { Pool } from 'pg';
import config from '../config';

const app = express();

app.use(cors());

const pool = new Pool(config.pg);

app.get('/api/', (req, res) => {
  res.send('--Freecycle API--');
});

app.get('/api/offers/search', async (req, res) => {
  const searchTerm = req.query.searchTerm;
  const groupId = req.query.groupId;
  const minPostId = req.query.minPostId;

  let result;

  try {
    result = await offerSearchByGroup(pool, searchTerm, groupId, minPostId);
  } catch (e) {
    console.log(e);
  }

  res.json(result);
});

app.get('/api/offers/recent/:minPostId', async (req, res) => {
  const minPostId = req.params.minPostId;

  let result;

  try {
    result = await offerByRecent(pool, minPostId);
  } catch (e) {
    console.log(e);
  }

  res.json(result);
});

app.get('/api/offers/:postId', async (req, res) => {
  const postId = req.params.postId;

  let result;

  try {
    result = await offerById(pool, postId);
  } catch (e) {
    console.log(e);
  }

  res.json(result);
});

app.post('/api/offers/:postId', async (req, res) => {
  const postId = req.params.postId;

  let result;

  try {
    result = await addOffer(pool, { postId, groupId: 'Default' });
  } catch (e) {
    console.log(e);
  }

  res.json(result);
});

export default app;
