// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug79046.phpt
  it("Bug #79046: NaN to int cast undefined behavior in exif", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data('data://image/tiff;base64,TU0AKgAAAA7//wAAANUAAQERAAsAAAABAAD4fwAAAA4A'));\n?>")).toMatchSnapshot();
  });
});
