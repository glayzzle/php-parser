// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_get_coding_type_deflate.phpt
  it("zlib_get_coding_type() with deflate encoding", function () {
    expect(parser.parseCode("<?php\nini_set('zlib.output_compression', 'Off');\n$encOff = zlib_get_coding_type();\nini_set('zlib.output_compression', 'On');\n$encOn = zlib_get_coding_type();\nini_set('zlib.output_compression', 'Off');\nvar_dump($encOff);\nvar_dump($encOn);\n?>")).toMatchSnapshot();
  });
});
