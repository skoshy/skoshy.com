type configTypes = {
  ENV: 'development' | 'production';
};

// don't destructure `process.env`, doesn't work - https://nextjs.org/docs#build-time-configuration
const ENV = process.env.ENV as configTypes['ENV'];

export const isDev = ENV === 'development';
export const isProd = ENV === 'production';
