// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug73737.phpt
  it("Bug #73737 (Crash when parsing a tag format)", function () {
    expect(parser.parseCode("<?php\n    $exif = exif_thumbnail(__DIR__ . '/bug73737.tiff');\n    var_dump($exif);\n?>")).toMatchSnapshot();
  });
});
