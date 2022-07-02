// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug20424.phpt
  it("Bug #20424 (stream_get_meta_data crashes on a normal file stream)", function () {
    expect(parser.parseCode("<?php\n$f = fopen(__FILE__, \"r\");\n$dummy = var_export(stream_get_meta_data($f), TRUE);\necho \"I'm alive!\\n\";\n?>")).toMatchSnapshot();
  });
});
