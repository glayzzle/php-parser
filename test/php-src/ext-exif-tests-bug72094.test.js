// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72094.phpt
  it("Bug #72094: Out of bounds heap read access in exif header processing", function () {
    expect(parser.parseCode("<?php\nprint_r(exif_read_data(__DIR__ . '/bug72094_1.jpg'));\nprint_r(exif_read_data(__DIR__ . '/bug72094_2.jpg'));\nprint_r(exif_read_data(__DIR__ . '/bug72094_3.jpg'));\nprint_r(exif_read_data(__DIR__ . '/bug72094_4.jpg'));\n?>\nDONE")).toMatchSnapshot();
  });
});
