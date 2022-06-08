// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug60150.phpt
  it("Bug #60150 (Integer overflow during the parsing of invalid exif header)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug60150.jpg';\nvar_dump(exif_read_data($infile));\n?>")).toMatchSnapshot();
  });
});
