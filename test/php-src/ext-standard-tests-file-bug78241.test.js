// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug78241.phpt
  it("Bug #78241 (touch() does not handle dates after 2038 in PHP 64-bit)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug78241.txt';\nfor ($i = 2037; $i <= 2040; $i++) {\n  $t = mktime(1, 1 , 1, 1, 1, $i);\n  echo 'Date: '.date('D, d M Y H:i:s', $t), PHP_EOL;\n  touch($filename, $t);\n  clearstatcache(true, $filename);\n  $file = filemtime($filename);\n  echo 'File: '.date('D, d M Y H:i:s', $file), PHP_EOL, PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
