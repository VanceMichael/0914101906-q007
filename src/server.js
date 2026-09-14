import Koa from 'koa'; import Database from 'better-sqlite3';
const db=new Database(process.env.DRONE_DB_PATH||'drone.db'); const app=new Koa();
app.use(ctx=>{if(ctx.path==='/health'){db.prepare('select 1').get();ctx.body={status:'ok'};return;}ctx.status=404;});
app.listen(Number(process.env.PORT||8080));
