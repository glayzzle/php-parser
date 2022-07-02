// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/finally_goto_001.phpt
  it("jmp into a finally block 01", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    goto test;\n    try {\n    } finally {\ntest:\n    }\n}\n?>")).toMatchSnapshot();
  });
});
