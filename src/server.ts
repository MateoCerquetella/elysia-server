import { Elysia } from 'elysia';

import { authMethods } from './authMethods';

const app = new Elysia();

authMethods(app);
app.listen(8080);
