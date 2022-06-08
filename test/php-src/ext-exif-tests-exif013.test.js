// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif013.phpt
  it("Check for exif_read_data, JPEG with IFD and GPS data in Motorola byte-order.", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__.'/image013.jpg'));\n?>")).toMatchSnapshot();
  });
});
