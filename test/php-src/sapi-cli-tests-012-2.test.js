// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/012-2.phpt
  it("more invalid arguments and error messages", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n// -r : behavior = CLI_DIRECT\n// -F / -R / -B / -E : behavior = PROCESS_STDIN\n// -l : behavior = LINT\n// -s : behavior = HIGHLIGHT\n// -w : behavior = STRIP\nvar_dump(`\"$php\" -n -r \"echo 1;\" -F some.php`);\nvar_dump(`\"$php\" -n -r \"echo 2;\" -f some.php`);\nvar_dump(`\"$php\" -n -r \"echo 3;\" -l`); // ignores linting\nvar_dump(`\"$php\" -n -r \"echo 4;\" -R some.php`);\nvar_dump(`\"$php\" -n -r \"echo 5;\" -B \"\"`);\nvar_dump(`\"$php\" -n -a -B \"\"`);\nvar_dump(`\"$php\" -n -r \"echo 6;\" -E \"\"`);\nvar_dump(`\"$php\" -n -a -E \"\"`);\nvar_dump(`\"$php\" -n -r \"echo 7;\" -s`);\nvar_dump(`\"$php\" -n -r \"echo 8;\" -w`);\nvar_dump(`\"$php\" -n -l -r \"echo 9;\"`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
