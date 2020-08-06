import { container } from 'tsyringe';

import ICacheprovider from './models/ICacheprovider';

import RedisCachProvider from './implementations/RedisCachProvider';

const providers = {
  redis: RedisCachProvider,
};

container.registerSingleton<ICacheprovider>('CacheProvider', providers.redis);
