// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug50845.phpt
  it("Bug #50845 (exif_read_data() returns corrupted exif headers)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug50845.jpg';\nvar_dump(exif_read_data($infile));\n?>")).toMatchSnapshot();
  });
});
