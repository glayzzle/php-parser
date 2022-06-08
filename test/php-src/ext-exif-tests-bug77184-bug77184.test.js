// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77184/bug77184.phpt
  it("Bug #74428 (Unsigned rational numbers are written out as signed rationals)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/DJI_0245_tiny.jpg';\n$tags = exif_read_data($infile);\necho $tags['GPSLatitude'][2], PHP_EOL;\necho $tags['GPSLongitude'][2], PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
