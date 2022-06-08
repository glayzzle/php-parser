// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73155.phpt
  it("Bug #73155 (imagegd2() writes wrong chunk sizes on boundaries)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(64, 64);\nimagecolorallocate($im, 0, 0, 0);\nob_start();\nimagegd2($im, null, 64, IMG_GD2_RAW);\n$buffer = ob_get_clean();\n$header = unpack('@10/nchunk_size/nformat/nx_count/ny_count', $buffer);\nprintf(\"chunk size: %d\\n\", $header['chunk_size']);\nprintf(\"x chunk count: %d\\n\", $header['x_count']);\nprintf(\"y chunk count: %d\\n\", $header['y_count']);\nprintf(\"file size: %d\\n\", strlen($buffer));\n?>")).toMatchSnapshot();
  });
});
