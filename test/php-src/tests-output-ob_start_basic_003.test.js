// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_003.phpt
  it("ob_start(): ensure even fatal error test is affected by output buffering.", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    return \"I have stolen your output\";\n}\nob_start('f');\ncause_fatal_error(); // call undefined function\nob_end_flush();\necho \"done (you shouldn't see this)\";\n?>")).toMatchSnapshot();
  });
});
