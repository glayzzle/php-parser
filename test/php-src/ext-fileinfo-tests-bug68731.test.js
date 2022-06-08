// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug68731.phpt
  it("Bug #68731 finfo_buffer doesn't extract the correct mime with some gifs", function () {
    expect(parser.parseCode("<?php\n    $buffer = file_get_contents(__DIR__ . '/68731.gif');\n    $finfo = finfo_open(FILEINFO_MIME_TYPE);\n    echo finfo_buffer($finfo, $buffer);\n?>")).toMatchSnapshot();
  });
});
