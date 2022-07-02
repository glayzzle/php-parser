// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/finally_goto_002.phpt
  it("jmp into a finally block 02", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    try {\n        goto test;\n    } finally {\ntest:\n    }\n}\n?>")).toMatchSnapshot();
  });
});
