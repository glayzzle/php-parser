// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/018.phpt
  it("CLI php -m", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\necho `\"$php\" -n -m`;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
