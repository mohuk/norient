import * as orient from 'orientjs';
import { Class, Property } from 'orientjs';

export const server = orient({
  host: 'orientdb',
  port: 2424,
  username: 'root',
  password: 'rootpwd'
});

export const db = server.use('norient');


export const list = () => {
  return new Promise<Array<string>>((resolve, reject) => {
    db.class.list(true)
      .then((res: Array<Class>) => {
        resolve(res.map(c => c.name));
      })
      .catch(reject);
  });
}

export const createVertex = (name: string, cluster?: string, isAbstract?: boolean) => {
  return new Promise<Class>((resolve, reject) => {
    db.class.create(name, 'V', cluster, isAbstract)
      .then(resolve)
      .catch(reject);
  });
}

export const createEdge = (name: string, cluster?: string, isAbstract?: boolean) => {
  return new Promise<Class>((resolve, reject) => {
    db.class.create(name, 'E', cluster, isAbstract)
      .then(resolve)
      .catch(reject);
  });
}

export const installEdge = (c: string, from: string, to: string, props?: any) => {
  return new Promise((resolve, reject) => {
    db.create('EDGE', c)
      .from(from).to(to).set(props).one()
      .then(resolve)
      .catch(reject);
  });
}

export const createProperty = (c: Class, config?: any, reload?: boolean) => {
  return new Promise<Property | Array<Property>>((resolve, reject) => {
    c.property.create(config, reload)
      .then(resolve)
      .catch(reject);
  });
}

export const createIndex = (c: string, prop: string, type: string) => {
  return new Promise<any>((resolve, reject) => {
    db.index.create({
      name: `${c}.${prop}`,
      type: type
    })
    .then(resolve)
    .catch(reject);
  });
}
