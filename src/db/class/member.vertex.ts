export const NAME = 'Member';
import { db } from '../';
import { createVertex, createProperty, createIndex } from '../';
import { INDEX_TYPE } from '../indexes';
import { DATA_TYPES } from '../data-types';

export const initialize = async () => {
  const c = await createVertex(NAME);
  await createProperty(c, [{
    name: 'name',
    type: DATA_TYPES.STRING,
  }, {
    name: 'dob',
    type: DATA_TYPES.DATE
  }]);
}
