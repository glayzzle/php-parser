// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug50660/bug50660.phpt
  it("Bug #50660 (exif_read_data(): Illegal IFD offset (works fine with other exif readers))", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug50660-1.jpg';\nvar_dump(exif_read_data($infile) !== false);\n$infile = __DIR__.'/bug50660-2.jpg';\nvar_dump(exif_read_data($infile) !== false);\n?>")).toMatchSnapshot();
  });
});
