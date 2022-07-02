// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33318.phpt
  it("Bug #33318 (throw 1; results in Invalid opcode 108/1/8)", function () {
    expect(parser.parseCode("<?php\nthrow 1;\n?>")).toMatchSnapshot();
  });
});
