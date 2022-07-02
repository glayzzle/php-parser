// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/flush_basic_001.phpt
  it("Test basic functionality of flush()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/basic_functions.c.\n */\n// Verify return type\nvar_dump(flush());\n// Ensure user buffers are not flushed by flush()\nob_start();\necho \"Inside a user buffer\\n\";\nflush();\nob_end_clean();\necho \"Outside of any user buffers\\n\";\nvar_dump(flush());\n?>")).toMatchSnapshot();
  });
});
