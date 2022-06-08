// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump10.phpt
  it("jump 10: goto into switch (forward)", function () {
    expect(parser.parseCode("<?php\ngoto L1;\nswitch (0) {\n    case 1:\n        L1: echo \"bug\\n\";\n        break;\n}\n?>")).toMatchSnapshot();
  });
});
