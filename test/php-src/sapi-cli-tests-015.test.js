// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/015.phpt
  it("CLI long options", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\necho `\"$php\" -n --version | grep built:`;\necho `echo \"<?php print_r(\\\\\\$argv);\" | \"$php\" -n -- foo bar baz`, \"\\n\";\necho `\"$php\" -n --version foo bar baz | grep built:`;\necho `\"$php\" -n --notexisting foo bar baz 2>&1 | grep Usage:`;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
