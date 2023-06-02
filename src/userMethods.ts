// import { Elysia } from 'elysia';

// export const userMethods = new Elysia()
//   .get('/sign/:name', async ({ jwt, cookie, setCookie, params }) => {
//     setCookie('auth', await jwt.sign(params), {
//       httpOnly: true,
//       maxAge: 7 * 86400
//     });

//     return `Sign in as ${cookie.auth}`;
//   })
//   .get('/profile', async ({ jwt, set, cookie: { auth } }) => {
//     const profile = await jwt.verify(auth);

//     if (!profile) {
//       set.status = 401;
//       return 'Unauthorized';
//     }

//     return `Hello ${profile.name}`;
//   });
