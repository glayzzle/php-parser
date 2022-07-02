// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug74923.phpt
  it("Bug #74923 Crash when crawling through network share", function () {
    expect(parser.parseCode("<?php\n/* No way to affect timeout here. On different systems this might take some\n    dozens of seconds to complete. */\n$s = '\\\\\\\\hello.com' . str_repeat('\\\\', 260);\nvar_dump($s, @stat($s));\n?>")).toMatchSnapshot();
  });
});
