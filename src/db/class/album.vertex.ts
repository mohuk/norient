export const NAME = 'Album';
import { db } from '../';
import { createVertex, createProperty, createIndex } from '../';
import { INDEX_TYPE } from '../indexes';
import { DATA_TYPES } from '../data-types';

export const initialize = async () => {
  const c = await createVertex(NAME);
  await createProperty(c, [{
    name: 'title',
    type: DATA_TYPES.STRING,
  }, {
    name: 'release',
    type: DATA_TYPES.DATE
  }]);
}
