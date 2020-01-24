import React from 'react';
import { Progress } from 'reactstrap';

export type mode = 'dev' | 'prod';

export const getMode = (): mode => process.env.REACT_APP_NODE_ENV as mode;

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
