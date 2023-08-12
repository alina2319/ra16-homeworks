const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

app.use(async (ctx, next) => {
	// CORS для фронтенда, который на git-hub.
	ctx.response.set('Access-Control-Allow-Origin', 'https://mksinc.github.io');
	await next();
});

const router = new Router();

router.get('/', async (ctx) => {
    ctx.response.body = 'Koa server has been started...';
});

router.get('/data', async (ctx) => {
    ctx.response.body = {status: "ok"};
});

router.get('/error', async (ctx) => {
    ctx.response.status = 500;
    ctx.response.body = {status: "Internal Error"};
});

router.get('/loading', async (ctx) => {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
    ctx.response.body = {status: "ok"};
});

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Koa server has been started on port ${port} ...`));