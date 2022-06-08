// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/019.phpt
  it("CLI php -i", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\necho `\"$php\" -n -i`;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
