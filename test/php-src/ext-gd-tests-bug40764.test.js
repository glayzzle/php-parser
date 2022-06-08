// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug40764.phpt
  it("Bug #40764 (line thickness not respected for horizontal and vertical lines)", function () {
    expect(parser.parseCode("<?php\n$image=imagecreatetruecolor(400, 400);\n$white = imagecolorallocate($image, 255, 255, 255);\n$black = imagecolorallocate($image, 0, 0, 0);\n$red = imagecolorallocate($image, 255, 0, 0);\nimagefill($image, 0, 0, $white);\nimagesetthickness($image, 10);\nimageline($image, 200, 0, 200, 400, $black);\nimageline($image, 0, 200, 400, 200, $black);\nimageline($image, 0, 0, 392, 392, $black);\nimagesetthickness($image, 1);\nimageline($image, 200, 0, 200, 400, $red);\nimageline($image, 0, 200, 400, 200, $red);\nimageline($image, 0, 0, 392, 392, $red);\nprint_r(imagecolorat($image, 195, 0));\nprint_r(imagecolorat($image, 0, 195));\n?>")).toMatchSnapshot();
  });
});
