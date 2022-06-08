// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/create_new_phar.phpt
  it("Phar: create a completely new phar", function () {
    expect(parser.parseCode("<?php\nfile_put_contents('phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php/a.php',\n    \"brand new!\\n\");\ninclude 'phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php/a.php';\n$fileName = \"ChineseFile\\xE5\\x84\\xB7\\xE9\\xBB\\x91.php\";\nfile_put_contents('phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php/$fileName.php',\n    'Text in utf8 file.');\ninclude 'phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php/$fileName.php';\n?>")).toMatchSnapshot();
  });
});
