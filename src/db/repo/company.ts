const Class = 'Company';
import { Record } from 'orientjs';
import { db } from '../';

const job = db.class.get(Class);

export const insert = async (title: string, email: string, desc: string) => {
  return new Promise<any>((resolve, reject) => {
    return db.insert().into(Class)
      .set({
        title: title,
        email: email,
        description: desc,
      }).one()
      .then(resolve)
      .catch(reject);
    })
}
