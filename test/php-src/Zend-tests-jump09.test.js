// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump09.phpt
  it("jump 09: goto into switch (backward)", function () {
    expect(parser.parseCode("<?php\nswitch (0) {\n    case 1:\n        L1: echo \"bug\\n\";\n        break;\n}\ngoto L1;\n?>")).toMatchSnapshot();
  });
});
