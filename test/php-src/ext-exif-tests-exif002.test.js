// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif002.phpt
  it("Check for exif_thumbnail", function () {
    expect(parser.parseCode("<?php\n/*\n  test1.jpg is a 1*1 image that does not contain any Exif/Comment information\n  test2.jpg is the same image but contains Exif/Comment information and a\n            copy of test1.jpg as a thumbnail.\n*/\n$infile = __DIR__.'/test1.jpg';\necho md5_file($infile).'_'.filesize($infile);\n$thumb = exif_thumbnail(__DIR__.'/test2.jpg');\necho \" == \";\necho md5($thumb).'_'.strlen($thumb);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
