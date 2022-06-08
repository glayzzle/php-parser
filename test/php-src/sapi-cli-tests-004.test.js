// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/004.phpt
  it("show information about function", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`$php -n --rf unknown`);\nvar_dump(`$php -n --rf echo`);\nvar_dump(`$php -n --rf phpinfo`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
