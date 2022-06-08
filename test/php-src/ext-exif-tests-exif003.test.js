// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif003.phpt
  it("Check for exif_read_data, Unicode user comment", function () {
    expect(parser.parseCode("<?php\n/*\n  test1.jpg is a 1*1 image that does not contain any Exif/Comment information\n  test2.jpg is the same image but contains Exif/Comment information and a\n            copy of test1.jpg as a thumbnail.\n  test3.jpg is the same as test2.jpg but with a UNICODE UserComment: &Auml;&Ouml;&&Uuml;&szlig;&auml;&ouml;&uuml;\n*/\nvar_dump(exif_read_data(__DIR__.'/test3.jpg','',true,false));\n?>")).toMatchSnapshot();
  });
});
