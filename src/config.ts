import dotenv from 'dotenv';

dotenv.config({
  path: `${process.env.NODE_ENV}.env`,
});

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
};

export default config;
