// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_encoding_crash.phpt
  it("PHP crash when zend_multibyte_encoding_converter returns (size_t)-1)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/exif_encoding_crash.jpg';\n$exif_data = exif_read_data($infile);\necho \"*** no core dump ***\\n\";\n?>")).toMatchSnapshot();
  });
});
