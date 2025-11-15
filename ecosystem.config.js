module.exports = {
  apps: [
    {
      name: 'client-partner',
      script: './dist/apps/client-partner/main.js',
      exec_mode: 'cluster',
      instances: 2,
      env: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.CLIENTPARTNERPORT
      }
    },
    {
      name: 'platform-partner',
      script: './dist/apps/platform-partner/main.js',
      exec_mode: 'cluster',
      instances: 2,
      env: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PLATFORMPARTNER
      }
    },
    {
      name: 'moderator-partner',
      script: './dist/apps/moderator-partner/main.js',
      exec_mode: 'cluster',
      instances: 2,
      env: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.MODERATORPARTNER
      }
    },
  ],
};