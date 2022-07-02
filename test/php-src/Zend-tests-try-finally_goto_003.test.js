// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/finally_goto_003.phpt
  it("jmp into a finally block 03", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    try {\n    } finally {\n    goto test;\ntest:\n    }\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
