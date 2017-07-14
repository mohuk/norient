import { Context } from 'koa';
import { create, list, update } from '../service/artist';

export const get = async (ctx: Context) => {
  const res = await list();
  ctx.body = { artists: res };
};

export const post = async (ctx: Context) => {
  const res = await create(ctx.request.body.title, ctx.request.body.description);
  ctx.body = res;
};

export const put = async (ctx: Context) => {
  const res = await update(ctx.request.body.rid, ctx.request.body.title, ctx.request.body.description);
  ctx.body = res;
};
