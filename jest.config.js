"use strict";

const ENABLE_COVERAGE = !!process.env.CI || !!process.env.COVERAGE;

module.exports = {
  collectCoverage: ENABLE_COVERAGE,
  coverageDirectory: "coverage/",
  coverageThreshold: {
    global: {
      statements: 96.4,
      branches: 90.1,
      functions: 99.4,
      lines: 96.9,
    },
  },
  projects: [
    {
      displayName: "test",
      testEnvironment: "node",
    },
    {
      runner: "jest-runner-eslint",
      displayName: "lint",
      testMatch: ["<rootDir>/**/*.js"],
      testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/coverage/",
        "<rootDir>/php-src/",
        "<rootDir>/test/php-src/",
      ],
    },
  ],
};
