// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif023.phpt
  it("Check for exif_read_data, TIFF with IFD, EXIF and GPS data in Motorola byte-order.", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.'/image023.tiff'));\n?>")).toMatchSnapshot();
  });
});
