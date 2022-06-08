// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/001.phpt
  it("version string", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`$php -n -v`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
