import { Elysia, t } from 'elysia';

import { swagger } from '@elysiajs/swagger';

async function signIn({
  username,
  password
}: {
  username: string;
  password: string;
}) {
  // This is a placeholder for your sign-in logic.
  // In a real application, you would check the username and password against a database.
  if (username === 'username' && password === 'password') {
    return { success: true };
  } else {
    return { success: false };
  }
}

const app = new Elysia()
  .use(swagger())
  .post('/sign-in', ({ body }) => signIn(body), {
    body: t.Object({
      username: t.String(),
      password: t.String()
    })
  })
  .get('/hello', () => 'Hello, world! :)')
  .listen(8080);

export type App = typeof app;
