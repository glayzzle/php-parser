// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/directory/bug74589_utf8.phpt
  it("Bug #74589 __DIR__ wrong for unicode character, UTF-8", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=utf-8\n#vim: set encoding=utf-8\n*/\n$item = \"bug74589_新建文件夹\"; // utf-8 string\n$dir = __DIR__ . DIRECTORY_SEPARATOR . $item;\n$test_file = $dir . DIRECTORY_SEPARATOR . \"test.php\";\nmkdir($dir);\nfile_put_contents($test_file,\n\"<?php\n    var_dump(__DIR__);\n    var_dump(__FILE__);\n    var_dump(__DIR__ === __DIR__);\");\n$php = getenv('TEST_PHP_EXECUTABLE');\necho shell_exec(\"$php -n $test_file\");\n?>")).toMatchSnapshot();
  });
});
