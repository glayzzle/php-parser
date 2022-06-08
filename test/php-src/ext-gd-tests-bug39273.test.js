// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug39273.phpt
  it("Bug #37360 (gdimagecreatefromgif, bad image sizes)", function () {
    expect(parser.parseCode("<?php\n$small = imagecreatetruecolor(10, 10);\n$c1 = imagecolorallocatealpha($small, 255,0,0,50);\nimagecolortransparent($small, 0);\nimagealphablending($small, 0);\nimagefilledrectangle($small, 0,0, 6,6, $c1);\n$width = 300;\n$height = 300;\n$srcw = imagesx($small);\n$srch = imagesy($small);\n$img = imagecreatetruecolor($width, $height);\nimagecolortransparent($img, 0);\nimagealphablending($img, false);\nimagecopyresized($img, $small, 0,0, 0,0, $width, $height, $srcw, $srch);\nimagesavealpha($img, 1);\n$c = imagecolorat($img, 0,0);\nprintf(\"%X\", $c);\n?>")).toMatchSnapshot();
  });
});
