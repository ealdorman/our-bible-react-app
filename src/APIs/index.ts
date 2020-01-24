import superagent from 'superagent';

import { getMode } from '../utils';

interface IBaseUrls {
  dev: string;
  prod: string;
}

const baseUrls: IBaseUrls = {
  dev: 'http://localhost:3006',
  prod: 'https://api.ourbible.io',
};

export const bibleApi = async (
  method: 'POST' | 'GET',
  resource: string,
  body?: { [key: string]: any }
): Promise<any> => {
  const mode = getMode();

  const res = await superagent(method, `${baseUrls[mode]}${resource}`).send(
    body
  );

  if (!res || !res.body || !res.body.success) {
    return null;
  }

  return res.body;
};
