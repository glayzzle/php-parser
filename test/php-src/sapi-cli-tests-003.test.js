// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/003.phpt
  it("defining INI options with -d", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nvar_dump(`$php -n -d max_execution_time=111 -r 'var_dump(ini_get(\"max_execution_time\"));'`);\nvar_dump(`$php -n -d max_execution_time=500 -r 'var_dump(ini_get(\"max_execution_time\"));'`);\nvar_dump(`$php -n -d max_execution_time=500 -d max_execution_time=555 -r 'var_dump(ini_get(\"max_execution_time\"));'`);\nvar_dump(`$php -n -d upload_tmp_dir=/test/path -d max_execution_time=555 -r 'var_dump(ini_get(\"max_execution_time\")); var_dump(ini_get(\"upload_tmp_dir\"));'`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
