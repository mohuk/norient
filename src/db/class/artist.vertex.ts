export const NAME = 'Artist';
import { db } from '../';
import { createVertex, createProperty, createIndex } from '../';
import { INDEX_TYPE } from '../indexes';

export const initialize = async () => {
  const c = await createVertex(NAME);
  await createProperty(c, [{
    name: 'title',
    type: 'String',
  }, {
    name: 'description',
    type: 'String'
  }]);
}
