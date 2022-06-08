// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif004.phpt
  it("Check for exif_read_data, Unicode WinXP tags", function () {
    expect(parser.parseCode("<?php\n/*\n  test4.jpg is a 1*1 image that contains Exif tags written by WindowsXP\n*/\n$image  = exif_read_data(__DIR__.'/test4.jpg','',true,false);\nvar_dump($image['WINXP']);\n?>")).toMatchSnapshot();
  });
});
