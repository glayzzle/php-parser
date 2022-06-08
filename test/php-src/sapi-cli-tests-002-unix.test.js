// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/002-unix.phpt
  it("running code with -r", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`$php -n -r 'var_dump(\"hello\");'`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
