import React from 'react';
import { Progress } from 'reactstrap';
import { Intent } from '@blueprintjs/core';

import { AppToaster } from '../components/AppToaster';
import { IOptionData } from '../components/Select';

export type mode = 'dev' | 'prod';

export const getMode = (): mode => process.env.REACT_APP_NODE_ENV as mode || 'prod';

export const getProgressBar = (progress: number): React.ReactNode => {
  let color;

  if (progress < 25) {
    color = 'danger';
  } else if (progress >= 25 && progress < 100) {
    color = 'warning';
  } else {
    color = 'success';
  }

  return <Progress value={progress} color={color} />;
};

export const showNeedsMetaMaskToast = () => {
  AppToaster.show({
    message: 'You need MetaMask to use this Dapp.',
    intent: Intent.WARNING,
    action: {
      href: 'https://metamask.io/',
      target: '_blank',
      text: <strong>Get it</strong>,
    },
  });
};

export const verseWasPreserved = (
  preserved: IOptionData[],
  verse: IOptionData
): boolean => {
  try {
    if (!verse) {
      return false;
    }

    const preservedVerseTexts = preserved
      .filter(o => !!o.text)
      .map(p => p.text);

    return preservedVerseTexts.includes(verse.text);
  } catch (_) {
    return false;
  }
};
