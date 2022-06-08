// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug71273.phpt
  it("Bug #71273 A wrong ext directory setup in php.ini leads to crash", function () {
    expect(parser.parseCode("<?php\n    /* NOTE this file is required to be encoded in iso-8859-1 */\n    $cmd = getenv('TEST_PHP_EXECUTABLE') . \" -n -d html_errors=on -d extension_dir=a/�/w -d extension=php_kartoffelbrei.dll -v 2>&1\";\n    $out = shell_exec($cmd);\n    var_dump(preg_match(\",.+a[\\\\/].+[\\\\/]w.php_kartoffelbrei.dll.+,s\", $out));\n?>")).toMatchSnapshot();
  });
});
