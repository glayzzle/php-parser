// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif010.phpt
  it("Check for exif_read_data, JPEG with IFD and EXIF data in Intel byte-order.", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.'/image010.jpg'));\n?>")).toMatchSnapshot();
  });
});
