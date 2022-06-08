// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif016.phpt
  it("Check for exif_read_data, TIFF with IFD data in Intel byte-order.", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.'/image016.tiff'));\n?>")).toMatchSnapshot();
  });
});
