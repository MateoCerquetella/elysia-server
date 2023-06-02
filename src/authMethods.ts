// authMethods.ts
import { Elysia, t } from 'elysia';

import cookie from '@elysiajs/cookie';
import { jwt } from '@elysiajs/jwt';
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

export const authMethods = (app: Elysia) =>
  app
    .use(swagger())
    .use(cookie())
    .use(
      jwt({
        name: 'jwt',
        secret: 'es un secreto de tu mirada y la mia'
      })
    )
    .post('/sign-in-test', ({ body }) => signIn(body), {
      body: t.Object({
        username: t.String(),
        password: t.String()
      })
    })
    .get('/sign/:name', async ({ jwt, cookie, setCookie, params }) => {
      setCookie('auth', await jwt.sign(params), {
        httpOnly: true,
        maxAge: 7 * 86400
      });

      return `Sign in as ${cookie.auth}`;
    })
    .get('/profile', async ({ jwt, set, cookie: { auth } }) => {
      const profile = await jwt.verify(auth);

      if (!profile) {
        set.status = 401;
        return 'Unauthorized';
      }

      return `Hello ${profile.name}`;
    })
    .get('/hello', () => 'Hello, world! :)');
