// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/invalid_octal.phpt
  it("Invalid octal", function () {
    expect(() => parser.parseCode("<?php\n$x = 08;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
