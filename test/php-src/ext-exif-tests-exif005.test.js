// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif005.phpt
  it("Check for exif_read_data, unusual IFD start", function () {
    expect(parser.parseCode("<?php\n// test5.jpg is a 1*1 image that contains an Exif section with ifd = 00000009h\n$image  = exif_read_data(__DIR__.'/test5.jpg','',true,false);\nvar_dump($image['IFD0']);\n?>")).toMatchSnapshot();
  });
});
