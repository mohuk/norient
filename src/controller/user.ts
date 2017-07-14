import { Context } from 'koa';
import { getUsers } from '../service/user';

export const get = async (ctx: Context) => {
  ctx.body = { users: 'classNames', time: Date.now() };
};

export const post = (ctx: Context) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT]: /user';
};
