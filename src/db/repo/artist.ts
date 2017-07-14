import { NAME } from '../class/artist.vertex';
import { db } from '../';

export const insert = async (title: string, description: string) => {
  return new Promise<any>((resolve, reject) => {
    return db.insert().into(NAME)
      .set({
        title: title,
        description: description
      }).one()
      .then(resolve)
      .catch(reject);
    })
}

export const getAll = () => {
  return new Promise<Array<any>>((resolve, reject) => {
    return db.select().from(NAME).all()
      .then(resolve)
      .catch(reject);
  })
}

export const updateOne = (rid: string, title: string, description: string) => {
  return new Promise((resolve, reject) => {
    return db.update(rid)
      .set({
        title: title,
        description: description
      }).one()
      .then(resolve)
      .catch(reject);
  })
}
