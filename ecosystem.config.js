module.exports = {
  apps: [
    {
      name: 'client-partner',
      script: './dist/apps/client-partner/main.js',
      exec_mode: 'cluster',
      instances: 1
    },
    {
      name: 'platform-partner',
      script: './dist/apps/platform-partner/main.js',
      exec_mode: 'cluster',
      instances: 1
    },
    {
      name: 'moderator-partner',
      script: './dist/apps/moderator-partner/main.js',
      exec_mode: 'cluster',
      instances: 1
    },
  ],
};