import { db } from '../';
import { createVertex, createProperty } from '../repo/class';

export const initialize = async () => {
  const c = await createVertex('Job');
  const props = createProperty(c, [{
    name: 'title',
    type: 'String',
    mandatory: true
  }, {
    name: 'description',
    type: 'String'
  }]);
}
