
import type { Config } from '@jest/types';
import '@testing-library/jest-dom';

export default async (): Promise<Config.InitialOptions> => ( {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'ts', 'jsx', 'tsx'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts(x?)$',
  transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)",
  ],
  moduleNameMapper: {
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/lib/test/setup-tests.ts'],
  setupFilesAfterEnv: [/* '@testing-library/react/cleanup-after-each', */ './setupTests.js'],
  collectCoverage: true,
  coverageDirectory: '../coverage',
  collectCoverageFrom: ['./**/*.ts', './**/*.tsx'],
  coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
  coverageThreshold: {
      global: {
          statements: 65,
      },
  },
  globals: {
      'ts-jest': {
          isolatedModules: true,
      },
  },
});
