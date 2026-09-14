import Koa from 'koa'; import Database from 'better-sqlite3';
const db=new Database(process.env.DRAW_DB_PATH||'draw.db'); const app=new Koa();
app.use(ctx=>{if(ctx.path==='/health'){db.prepare('select 1').get();ctx.body={status:'ok'};return;}ctx.status=404;});
app.listen(Number(process.env.PORT||8080));
