// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump07.phpt
  it("jump 07: goto into loop (backward)", function () {
    expect(parser.parseCode("<?php\nwhile (0) {\n    L1: echo \"bug\\n\";\n}\ngoto L1;\n?>")).toMatchSnapshot();
  });
});
