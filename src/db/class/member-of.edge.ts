export const NAME = 'MemberOf'
import { db } from '../';
import { createEdge, createProperty } from '../';

export const initialize = async () => {
  const c = await createEdge(NAME);
}
