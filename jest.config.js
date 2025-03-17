module.exports = {
  coverageDirectory: "coverage",
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
};