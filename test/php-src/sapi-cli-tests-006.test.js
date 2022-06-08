// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/006.phpt
  it("show information about extension", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`$php -n --re unknown`);\nvar_dump(`$php -n --re \"\"`);\nvar_dump(`$php -n --re pcre`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
