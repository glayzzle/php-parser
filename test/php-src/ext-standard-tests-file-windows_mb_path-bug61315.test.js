// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug61315.phpt
  it("Bug #61315 stat() fails with specific DBCS characters", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"testBug61315\" . DIRECTORY_SEPARATOR;\n$d0 = $prefix . \"ソフト\";\n$d1 = $prefix . \"フォルダ\";\nmkdir($prefix);\nmkdir($d0);\nmkdir($d1);\nget_basename_with_cp($d0, 65001);\nget_basename_with_cp($d1, 65001);\ntouch(\"$d0\\\\test0.txt\");\ntouch(\"$d1\\\\test1.txt\");\nvar_dump(count(stat(\"$d0\\\\test0.txt\")) > 0);\nvar_dump(count(stat(\"$d0\\\\test0.txt\")) > 0);\nunlink(\"$d0\\\\test0.txt\");\nunlink(\"$d1\\\\test1.txt\");\nrmdir($d0);\nrmdir($d1);\nrmdir($prefix);\n?>")).toMatchSnapshot();
  });
});
