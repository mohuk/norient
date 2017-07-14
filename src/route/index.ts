import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import artist from './artist';

export default () => compose([
  artist()
]);
