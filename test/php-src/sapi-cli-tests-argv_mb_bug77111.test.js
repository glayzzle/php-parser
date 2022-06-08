// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/argv_mb_bug77111.phpt
  it("Bug #77111 php-win.exe corrupts unicode symbols from cli parameters", function () {
    expect(parser.parseCode("<?php\n$php = dirname(getenv('TEST_PHP_EXECUTABLE')) . DIRECTORY_SEPARATOR . \"php-win.exe\";\n$out_fl = __DIR__ . \"\\\\argv_bug77111.txt\";\n$argv_fl = __DIR__ . DIRECTORY_SEPARATOR . \"argv_test.php\";\nfile_put_contents($argv_fl, \"<?php file_put_contents('$out_fl', implode(' ', array_slice(\\$argv, 1))); ?>\");\n`$php -n $argv_fl Ästhetik Æstetik Esthétique Estética Эстетика`;\nvar_dump(file_get_contents($out_fl));\n?>")).toMatchSnapshot();
  });
});
