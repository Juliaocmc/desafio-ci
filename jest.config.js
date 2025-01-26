module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],  // Esse padrão ajuda a garantir que os arquivos de teste sejam encontrados
};