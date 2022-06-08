// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/image_type_to_mime_type_variation4.phpt
  it("Test image_type_to_mime_type() function : usage variations - Passing IMAGETYPE_ICO and IMAGETYPE_SWC", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing image_type_to_mime_type() : usage variations ***\\n\";\nerror_reporting(E_ALL ^ E_NOTICE);\nvar_dump( image_type_to_mime_type(IMAGETYPE_ICO) );\nvar_dump( image_type_to_mime_type(IMAGETYPE_SWC) );\n?>")).toMatchSnapshot();
  });
});
