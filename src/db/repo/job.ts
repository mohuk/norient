import { Record } from 'orientjs';
import { db } from '../';

const job = db.class.get('Job');

export const insert = async (title: string, desc: string) => {
  return new Promise<any>((resolve, reject) => {
    db.insert().into('Job')
    .set({
      title: title,
      description: desc,
      foo: 'bar'
    }).one()
    .then(resolve)
    .catch(reject);
  })
}
