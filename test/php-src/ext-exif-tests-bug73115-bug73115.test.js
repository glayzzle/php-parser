// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug73115/bug73115.phpt
  it("Bug #73115 (exif_read_data triggers warning on reading binary strings)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug73115.jpg';\nvar_dump(count(exif_read_data($infile)));\n?>")).toMatchSnapshot();
  });
});
