// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73159.phpt
  it("Bug #73159 (imagegd2(): unrecognized formats may result in corrupted files)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10, 10);\nob_start();\nimagegd2($im, null, 128, 0);\n$buffer = ob_get_clean();\n$header = unpack('@12/nformat', $buffer);\nprintf(\"format: %d\\n\", $header['format']);\n?>")).toMatchSnapshot();
  });
});
