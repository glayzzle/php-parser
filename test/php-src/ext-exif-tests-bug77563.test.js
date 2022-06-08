// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77563.phpt
  it("Bug 77563 (Uninitialized read in exif_process_IFD_in_MAKERNOTE)", function () {
    expect(parser.parseCode("<?php\n$s = exif_thumbnail(__DIR__.\"/bug77563.jpg\");\n?>\nDONE")).toMatchSnapshot();
  });
});
