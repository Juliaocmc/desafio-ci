module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
};