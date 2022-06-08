// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69640.phpt
  it("Bug #69640 Unhandled Error thrown from userland do not produce any output", function () {
    expect(() => parser.parseCode("<?php\nthrow new \\ParseError('I mess everything up! :trollface:');\n?>")).toThrowErrorMatchingSnapshot();
  });
});
