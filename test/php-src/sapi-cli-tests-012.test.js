// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/012.phpt
  it("invalid arguments and error messages", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`\"$php\" -n -F some.php -F some.php`);\nvar_dump(`\"$php\" -n -F some.php -R some.php`);\nvar_dump(`\"$php\" -n -R some.php -F some.php`);\nvar_dump(`\"$php\" -n -R some.php -R some.php`);\nvar_dump(`\"$php\" -n -f some.php -f some.php`);\nvar_dump(`\"$php\" -n -B '' -B ''`);\nvar_dump(`\"$php\" -n -E '' -E ''`);\nvar_dump(`\"$php\" -n -r '' -r ''`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
