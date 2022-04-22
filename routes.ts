
import  { Router }  from 'https://deno.land/x/oak@v10.5.1/mod.ts';

const router  = new Router();

router.get('/', (context) => {
  context.response.body = 'Hello World!';
}).get('/new', ({response}) => {
  response.body = 'New endpoint!';
});

export default router;