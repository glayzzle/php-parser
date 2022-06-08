// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/015.phpt
  it("Testing include", function () {
    expect(parser.parseCode("<?php\ninclude \"015.inc\";\n?>")).toMatchSnapshot();
  });
});
