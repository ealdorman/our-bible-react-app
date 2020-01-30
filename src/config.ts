import { getMode } from './utils';
import theBibleDevAbi from './contracts/theBible/dev.json';
import theBibleProdAbi from './contracts/theBible/prod.json';

interface IPlatform {
  api: {
    baseUrl: string;
  };
  contracts: {
    theBible: {
      address: string;
      abi: any;
    };
  };
}

interface IConfig {
  env: 'dev' | 'prod';
  dev: IPlatform;
  prod: IPlatform;
}

const config: IConfig = {
  env: getMode(),
  dev: {
    api: {
      baseUrl: 'http://localhost:3006',
    },
    contracts: {
      theBible: {
        address: '0xad5581e0553a96eBC3821eE19b0a22fAEdCA630f',
        abi: theBibleDevAbi,
      },
    },
  },
  prod: {
    api: {
      baseUrl: 'https://api.ourbible.io',
    },
    contracts: {
      theBible: {
        address: '0x635B5D69C84FDbff768443a3E823EE1c07d6eAc8',
        abi: theBibleProdAbi,
      },
    },
  },
};

export default config;
