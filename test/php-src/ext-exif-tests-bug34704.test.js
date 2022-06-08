// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug34704.phpt
  it("Bug #34704 (Infinite recursion due to corrupt JPEG)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug34704.jpg';\nvar_dump(exif_read_data($infile));\n?>")).toMatchSnapshot();
  });
});
