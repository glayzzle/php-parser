// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/float_cast_overflow.phpt
  it("Overflow in float to int cast", function () {
    expect(parser.parseCode("<?php\nvar_dump(@exif_read_data(__DIR__ . '/float_cast_overflow.tiff'));\n?>")).toMatchSnapshot();
  });
});
