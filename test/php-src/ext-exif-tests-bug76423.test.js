// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug76423.phpt
  it("Bug #76423 (Int Overflow lead to Heap OverFlow in exif_thumbnail_extract of exif.c)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(__DIR__ . '/bug76423.jpg', 0, true, true);\n?>")).toMatchSnapshot();
  });
});
