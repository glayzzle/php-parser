// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73157.phpt
  it("Bug #73157 (imagegd2() ignores 3rd param if 4 are given)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(8, 8);\nimagecolorallocate($im, 0, 0, 0);\nob_start();\nimagegd2($im, null, 256, IMG_GD2_RAW);\n$buffer = ob_get_clean();\n$header = unpack('@10/nchunk_size', $buffer);\nprintf(\"chunk size: %d\\n\", $header['chunk_size']);\n?>")).toMatchSnapshot();
  });
});
