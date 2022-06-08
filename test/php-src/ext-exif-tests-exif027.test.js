// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif027.phpt
  it("Check for exif_read_data, TIFF with IFD0, EXIF, INTEROP data in Motorola byte-order.", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.'/image027.tiff'));\n?>")).toMatchSnapshot();
  });
});
