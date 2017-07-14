import { insert, getAll, updateOne } from '../db/repo/artist';

export const create = async (title: string, description: string) => {
  const artist = await insert(title, description);
  return artist;
}

export const list = async () => {
  const artists = await getAll();
  return artists;
}

export const update = async (rid: string, title: string, description: string) => {
  const update = await updateOne(rid, title, description);
  return update;
}
