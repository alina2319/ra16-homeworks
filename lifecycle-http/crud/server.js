const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const Router = require('koa-router');
const { nanoid } = require('nanoid');
const Notes = require('./js/Notes');

const app = new Koa();

// Нужен чтобы читать тело POST запроса.
app.use(koaBody({json: true}));

app.use(async (ctx, next) => {
	// CORS для фронтенда, который на git-hub.
	ctx.response.set('Access-Control-Allow-Origin', 'https://mksinc.github.io');
	ctx.response.set('Access-Control-Allow-Methods', 'DELETE');

	await next();
});

const dirPublic = path.join(__dirname, 'public');
app.use(koaStatic(dirPublic));

const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());

const notesList = [{
		id: nanoid(),
		content: 'Accusantium aperiam assumenda eaque impedit, in laborum libero nobis recusandae rem sunt totam, vel, vitae voluptate!'
	},
	{
		id: nanoid(),
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae inventore mollitia nesciunt non quos! Accusantium aperiam assumenda eaque impedit, in laborum libero nobis recusandae rem sunt totam, vel, vitae voluptate!'
	}
];

const notes = new Notes(notesList);

router.get('/notes', async (ctx) => {
	ctx.response.body = JSON.stringify(notes.list);
});

router.delete('/notes/:id', async (ctx) => {
	notes.remove(ctx.params.id);
	ctx.response.body = JSON.stringify({
		success: true,
		result: 'Note has been deleted',
	});
});

router.post('/notes', async (ctx) => {
	const { content } = JSON.parse(ctx.request.body);
	notes.add(content);
	
	ctx.response.body = JSON.stringify({
		success: true,
		result: 'Note has been added',
	});
});

const PORT = process.env.PORT || 4000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Koa server has been started on port ${PORT} ...`));
