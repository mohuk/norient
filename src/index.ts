
import * as Koa from 'koa';
import * as debug  from 'debug';

import * as jsonMiddleware from 'koa-json';
import * as loggerMiddleware from 'koa-bunyan-logger';


import requestMiddleware from './middleware/request';
import errorMiddleware from './middleware/error';

import routeMiddleware from './route';

import conf from './conf';

import { initialize } from './db/classes';

const app = new Koa();
const d = debug('kickstarter:root');
initialize();

// Register middleware
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes via middleware
app.use(routeMiddleware());

d('current environment: %s', conf.get('env'));
d('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
