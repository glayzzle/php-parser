// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug76557.phpt
  it("Bug 76557 (heap-buffer-overflow (READ of size 48) while reading exif data)", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__ . \"/bug76557.jpg\"));\n?>\nDONE")).toMatchSnapshot();
  });
});
