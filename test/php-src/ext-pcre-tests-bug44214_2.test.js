// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug44214_2.phpt
  it("Bug #44214-2 (crash with preg_replace_callback() and global variable)", function () {
    expect(parser.parseCode("<?php\n$string = 'aaa bbb ccc ddd eee ccc aaa bbb';\n$array = array();\nfunction myCallBack( $match ) {\n    global $array;\n    $array[] = $match[0];\n    return 'xxx';\n}\nvar_dump(preg_replace_callback( '`a+`', 'myCallBack', $string));\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
