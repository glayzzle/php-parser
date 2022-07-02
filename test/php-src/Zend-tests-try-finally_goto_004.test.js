// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/finally_goto_004.phpt
  it("jmp into a finally block 03", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    try {\n    } finally {\ntest:\n    }\n    goto test;\n}\n?>")).toMatchSnapshot();
  });
});
