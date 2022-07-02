// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/bug73877.phpt
  it("Bug #73877 readlink() returns garbage for UTF-8 paths\nFile type functions", function () {
    expect(parser.parseCode("<?php\n$base = __DIR__ . DIRECTORY_SEPARATOR . \"bug73877\";\n$dir0 = $base . DIRECTORY_SEPARATOR . \"bug73877\";\n$dir1 = $base . DIRECTORY_SEPARATOR . \"Серёжка\";\n$junk0 = $base . DIRECTORY_SEPARATOR . \"Серёжка2\";\nmkdir($base);\nmkdir($dir0);\nmkdir($dir1);\n`mklink /J $junk0 $dir0`;\nvar_dump(\n    readlink($dir0),\n    readlink($dir1),\n    readlink($junk0),\n    strlen(readlink($dir0)) === strlen(readlink($junk0))\n);\n?>")).toMatchSnapshot();
  });
});
