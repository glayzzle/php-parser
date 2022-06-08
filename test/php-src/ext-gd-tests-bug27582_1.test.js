// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug27582_1.phpt
  it("Bug #27582 (ImageFillToBorder() on alphablending image looses alpha on fill color)", function () {
    expect(parser.parseCode("<?php\n$dest = dirname(realpath(__FILE__)) . '/bug27582.png';\n@unlink($dest);\n$im = ImageCreateTrueColor(10, 10);\nimagealphablending($im, true);\nimagesavealpha($im, true);\n$bordercolor=ImageColorAllocateAlpha($im, 0, 0, 0, 2);\n$color = ImageColorAllocateAlpha($im, 0, 0, 0, 1);\nImageFillToBorder($im, 5, 5, $bordercolor, $color);\nimagepng($im, $dest);\n$im2 = imagecreatefrompng($dest);\n$col = imagecolorat($im2, 5, 5);\n$color = imagecolorsforindex($im2, $col);\necho $color['alpha'];\n@unlink($dest);\n?>")).toMatchSnapshot();
  });
});
