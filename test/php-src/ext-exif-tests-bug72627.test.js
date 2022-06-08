// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72627.phpt
  it("Bug #72627 (Memory Leakage In exif_process_IFD_in_TIFF)", function () {
    expect(parser.parseCode("<?php\n    $exif = exif_read_data(__DIR__ . '/bug72627.tiff',0,0,true);\n    var_dump($exif);\n?>")).toMatchSnapshot();
  });
});
