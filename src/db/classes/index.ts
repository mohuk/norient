import * as Job from '../classes/job';
import * as Company from '../classes/Company';
import * as Post from '../classes/post';
import { db } from '../';
import { list } from '../repo/class';

export const initialize = async () => {
  const classList = await list();

  if (!classList.find(c => c === 'Job')) {
    Job.initialize();
  }

  if (!classList.find(c => c === 'Company')) {
    Company.initialize();
  }

  if (!classList.find(c => c === 'Post')) {
    Post.initialize();
  }
};
