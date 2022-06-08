// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug78222.phpt
  it("Bug #78222 (heap-buffer-overflow on exif_scan_thumbnail)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(__DIR__.\"/bug78222.jpg\", 'THUMBNAIL', FALSE, TRUE);\n?>\nDONE")).toMatchSnapshot();
  });
});
