import { Context } from 'koa';
import { getUsers } from '../service/user';
import { db } from '../db';
import { Class } from 'orientjs';
import * as Job from '../db/repo/job';
import * as Company from '../db/repo/company';
import * as Post from '../db/repo/post';

export const get = async (ctx: Context) => {
  const job = await Job.insert('Painter', 'Its a Painting Job');
  const company = await Company.insert('Painting Company', 'painting@painters.com', 'Painting Company');
  const post = await Post.createEdge(job['@rid'].toString(), company['@rid'].toString())
  ctx.body = { users: 'classNames', time: Date.now() };
};

export const post = (ctx: Context) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT]: /user';
};
