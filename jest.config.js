"use strict";

const ENABLE_COVERAGE = !!process.env.CI || !!process.env.COVERAGE;

module.exports = {
  collectCoverage: ENABLE_COVERAGE,
  coverageDirectory: "coverage/",
  coverageThreshold: {
    global: {
      statements: 95.6,
      branches: 89.6,
      functions: 99,
      lines: 96.1,
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
      ],
    },
  ],
};
