export const NAME = 'Record'
import { db } from '../';
import { createEdge, createProperty } from '../';

export const initialize = async () => {
  const c = await createEdge(NAME);
}
