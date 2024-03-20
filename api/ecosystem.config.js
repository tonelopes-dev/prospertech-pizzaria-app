module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/main.js', // Alterado para apontar para o arquivo construído
      instances: 'max', // Opcional: para iniciar o máximo de instâncias possível
      exec_mode: 'cluster', // Opcional: para iniciar em modo de cluster
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
