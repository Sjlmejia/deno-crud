import  {Application }  from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import router from './routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});

console.log('Server running on http://localhost:8000');
 
