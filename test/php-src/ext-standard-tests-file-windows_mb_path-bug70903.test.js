// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug70903.phpt
  it("Bug #70903 scandir wrongly interprets the Turkish \"ı\" character", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"testBug70903\" . DIRECTORY_SEPARATOR;\n$d0 = $prefix . \"ı\";\nmkdir($prefix);\nmkdir($d0);\nget_basename_with_cp($d0, 65001);\ntouch(\"$d0\\\\ı.txt\");\nvar_dump(count(stat(\"$d0\\\\ı.txt\")) > 0);\nunlink(\"$d0\\\\ı.txt\");\nrmdir($d0);\nrmdir($prefix);\n?>")).toMatchSnapshot();
  });
});
