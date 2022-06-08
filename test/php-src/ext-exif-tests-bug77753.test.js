// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77753.phpt
  it("Bug #77753 (Heap-buffer-overflow in php_ifd_get32s)", function () {
    expect(parser.parseCode("<?php\n@var_dump(exif_read_data(__DIR__.\"/bug77753.tiff\"));\n?>\nDONE")).toMatchSnapshot();
  });
});
