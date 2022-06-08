// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug53580.phpt
  it("Bug #53580 (During resize gdImageCopyResampled cause colors change)", function () {
    expect(parser.parseCode("<?php\n$w0 = 100;\n$h0 = 100;\n$w1 = 150;\n$h1 = 150;\n$c0 = 0xffffff;\n$im0 = imagecreatetruecolor($w0, $h0);\nimagefilledrectangle($im0, 0, 0, $w0 - 1, $h0 - 1, $c0);\n$im1 = imagecreatetruecolor($w1, $h1);\nimagecopyresampled($im1, $im0, 0, 0, 0, 0, $w1, $h1, $w0, $h0);\nfor ($i = 0; $i < $w1; $i++) {\n    for ($j = 0; $j < $h1; $j++) {\n        if (($c1 = imagecolorat($im1, $i, $j)) !== $c0) {\n            printf(\"%d,%d = %d\\n\", $i, $j, $c1);\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
