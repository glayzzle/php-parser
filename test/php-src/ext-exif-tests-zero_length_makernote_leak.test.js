// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/zero_length_makernote_leak.phpt
  it("OSS-Fuzz: Memory leak for zero-length MAKERNOTE", function () {
    expect(parser.parseCode("<?php\n@exif_read_data(__DIR__ . '/zero_length_makernote_leak.tiff');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
