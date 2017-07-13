import { db } from '../';
import { createEdge, createProperty } from '../repo/class';

export const initialize = async () => {
  const c = await createEdge('Post');
}
