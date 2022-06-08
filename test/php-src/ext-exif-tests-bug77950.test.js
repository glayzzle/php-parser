// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77950.phpt
  it("Bug #77950 (Heap-buffer-overflow in _estrndup via exif_process_IFD_TAG)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(__DIR__.\"/bug77950.tiff\");\n?>\nDONE")).toMatchSnapshot();
  });
});
