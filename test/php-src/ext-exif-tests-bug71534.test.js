// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug71534.phpt
  it("Bug #71534 (Type confusion in exif_read_data() leading to heap overflow in debug mode)", function () {
    expect(parser.parseCode("<?php\n// This is kinda bad, I know! But, this generates about 200+ warnings due to its\n// broken TIFF format\nvar_dump(@exif_read_data(__DIR__ . DIRECTORY_SEPARATOR . 'bug71534.tiff') === false);\n?>")).toMatchSnapshot();
  });
});
