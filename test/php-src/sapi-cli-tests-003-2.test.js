// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/003-2.phpt
  it("defining INI options with -d (as 2nd arg)", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`\"$php\" -nd max_execution_time=111 -r 'var_dump(ini_get(\"max_execution_time\"));'`);\nvar_dump(`\"$php\" -nd max_execution_time=500 -r 'var_dump(ini_get(\"max_execution_time\"));'`);\n?>")).toMatchSnapshot();
  });
});
