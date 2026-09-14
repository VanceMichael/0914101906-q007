import Database from 'better-sqlite3';
import express from 'express';

const database = new Database(process.env.DRAW_DB_PATH || 'draw.db');
const app = express();
app.get('/health', (_request, response) => {
  database.prepare('select 1').get();
  response.json({status: 'ok'});
});
app.listen(Number(process.env.PORT || 8080));
