// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug76409.phpt
  it("Bug #76409 (heap use after free in _php_stream_free)", function () {
    expect(parser.parseCode("<?php\nexif_read_data('.');\n?>")).toMatchSnapshot();
  });
});
