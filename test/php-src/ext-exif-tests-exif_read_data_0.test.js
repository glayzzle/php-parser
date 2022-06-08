// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_read_data_0.phpt
  it("Test exif_read_data on unavailable file", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug73115.JPG';\nexif_read_data($infile);\n?>")).toMatchSnapshot();
  });
});
