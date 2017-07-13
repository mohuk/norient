import { db } from '../';
import { createVertex, createProperty } from '../repo/class';

export const initialize = async () => {
  const c = await createVertex('Company');
  const props = createProperty(c, [{
    name: 'title',
    type: 'String'
  }, {
    name: 'description',
    type: 'String'
  }, {
    name: 'email',
    type: 'String'
  }]);
}
