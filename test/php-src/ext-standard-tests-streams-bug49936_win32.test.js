// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug49936_win32.phpt
  it("Bug #49936 (crash with ftp stream in php_stream_context_get_option())", function () {
    expect(parser.parseCode("<?php\n$dir = 'ftp://your:self@localhost/';\nvar_dump(opendir($dir));\nvar_dump(opendir($dir));\n?>")).toMatchSnapshot();
  });
});
