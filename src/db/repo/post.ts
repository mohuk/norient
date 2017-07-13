const Class = 'Post';
import { Record } from 'orientjs';
import { db } from '../';
import { installEdge } from './class';

const job = db.class.get(Class);

export const createEdge = async (from: string, to: string) => {
  await installEdge('Post', from, to);
}
