import { readdirSync } from 'fs';
import { db } from '../';
import { list } from '../';

export const initialize = async () => {
  const files = readdirSync('./src/db/class').map(file => file.replace(/\.[^/.]+$/, "")).filter(v => v !== 'index');
  const classList = await list();
  files.forEach((file) => {
    const obj = require(`./${file}`);
    if(!classList.find(c => c === obj.NAME)){
      obj.initialize();
    }
  });
};
