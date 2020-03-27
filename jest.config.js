"use strict";

const ENABLE_COVERAGE = !!process.env.CI || !!process.env.COVERAGE;

module.exports = {
  collectCoverage: ENABLE_COVERAGE,
  coverageDirectory: "coverage/",
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
