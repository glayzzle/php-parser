// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/argv_mb.phpt
  it("Test basic argv multibyte API integration", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$argv_fl = __DIR__ . DIRECTORY_SEPARATOR . \"argv_test.php\";\nfile_put_contents($argv_fl, \"<?php var_dump(\\$argv); ?>\");\nvar_dump(`$php -n $argv_fl 多字节字符串 マルチバイト文字列 многобайтоваястрока flerbytesträng`);\n@unlink($argv_fl);\n?>")).toMatchSnapshot();
  });
});
