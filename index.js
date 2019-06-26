const fs = require('fs').promises;
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = {error: true};
  }
});

app.use(async ctx => {
  const {z} = ctx.query;
  const prefix = z.slice(0, 3);
  const suffix = z.slice(z.length - 4);
  const full = `${prefix}${suffix}`;
  const a = JSON.parse(await fs.readFile(`zipcode_jp/docs/zip_code/${prefix}/${full}.json`));
  ctx.body = a[0];
});

app.listen(process.env.ZCJS_PORT || 3000);