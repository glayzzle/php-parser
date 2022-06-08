// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/009.phpt
  it("using invalid combinations of cmdline options", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`$php -n -a -r \"echo hello;\"`);\nvar_dump(`$php -n -r \"echo hello;\" -a`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
