// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77831.phpt
  it("Bug #77831 (Heap-buffer-overflow in exif_iif_add_value in EXIF)", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.\"/bug77831.tiff\"));\n?>\nDONE")).toMatchSnapshot();
  });
});
