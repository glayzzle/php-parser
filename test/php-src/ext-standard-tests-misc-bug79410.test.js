// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/bug79410.phpt
  it("Bug #79410 (system() swallows last chunk if it is exactly 4095 bytes without newline)", function () {
    expect(parser.parseCode("<?php\nob_start();\nsystem(getenv('TEST_PHP_EXECUTABLE') . ' -n -r \"echo str_repeat(\\\".\\\", 4095);\"');\nvar_dump(strlen(ob_get_clean()));\n?>")).toMatchSnapshot();
  });
});
