// client.ts
import { edenTreaty } from '@elysiajs/eden';

import type { App } from './server';

const api = edenTreaty<App>('http://localhost:8080');

api['sign-in']
  .post({
    username: 'username',
    password: 'password'
  })
  .then(console.log);
