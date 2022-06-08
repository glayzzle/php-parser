// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/005.phpt
  it("show information about class", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`\"$php\" -n --rc unknown`);\nvar_dump(`\"$php\" -n --rc stdclass`);\nvar_dump(`\"$php\" -n --rc exception`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
