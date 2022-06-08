// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif001.phpt
  it("Check for exif_read_data", function () {
    expect(parser.parseCode("<?php\n/*\n  test1.jpg is a 1*1 image that does not contain any Exif/Comment information\n  test2.jpg is the same image but contains Exif/Comment information and a\n            copy of test1.jpg as a thumbnail.\n*/\nvar_dump(exif_read_data(__DIR__.'/test2.jpg','',true,false));\n?>")).toMatchSnapshot();
  });
});
