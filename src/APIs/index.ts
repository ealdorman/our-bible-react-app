import superagent from 'superagent';
import { Intent } from '@blueprintjs/core';

import Config from '../config';
import { AppToaster } from '../components/AppToaster';

const config = Config[Config.env];

export const bibleApi = async (
  method: 'POST' | 'GET',
  resource: string,
  body?: { [key: string]: any }
): Promise<any> => {
  try {
    const res = await superagent(
      method,
      `${config.api.baseUrl}${resource}`
    ).send(body);

    if (!res || !res.body || !res.body.success) {
      showBibleApiError();

      return null;
    }

    return res.body;
  } catch (e) {
    showBibleApiError();

    console.log('bibleApi error:', e);

    return null;
  }
};

const showBibleApiError = () => {
  AppToaster.show({
    message: 'We had an issue fetching data. Reloading the page may help.',
    intent: Intent.DANGER,
  });
};
