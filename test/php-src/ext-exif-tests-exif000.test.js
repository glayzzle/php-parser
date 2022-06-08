// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif000.phpt
  it("Check for exif_read_data default behaviour", function () {
    expect(parser.parseCode("<?php\n/*\n  test1.jpg is a 1*1 image that does not contain any Exif/Comment information\n  test2.jpg is the same image but contains Exif/Comment information and a\n            copy of test1.jpg as a thumbnail.\n*/\nprint_r(exif_read_data(__DIR__.'/test2.jpg'));\n?>")).toMatchSnapshot();
  });
});
