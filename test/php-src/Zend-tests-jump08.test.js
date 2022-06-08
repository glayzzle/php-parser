// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump08.phpt
  it("jump 08: goto into loop (forward)", function () {
    expect(parser.parseCode("<?php\ngoto L1;\nwhile (0) {\n    L1: echo \"bug\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
