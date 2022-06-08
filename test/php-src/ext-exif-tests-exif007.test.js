// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif007.phpt
  it("Check for exif_read_data, baseline JPEG with no IFD, EXIF, GPS or Interoperability data in Intel byte-order.", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.'/image007.jpg'));\n?>")).toMatchSnapshot();
  });
});
