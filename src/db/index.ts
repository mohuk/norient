import * as orient from 'orientjs';
export const server = orient({
  host: 'orientdb',
  port: 2424,
  username: 'root',
  password: 'rootpwd'
});

export const db = server.use('norient');
