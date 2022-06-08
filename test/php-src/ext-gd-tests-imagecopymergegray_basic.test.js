// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecopymergegray_basic.phpt
  it("Testing imagecopymergegray() of GD library", function () {
    expect(parser.parseCode("<?php\n$des = imagecreate(120, 120);\n$src = imagecreate(100, 100);\n$color_des = imagecolorallocate($des, 50, 50, 200);\n$color_src = imagecolorallocate($src, 255, 255, 0);\nimagefill($des, 0, 0, $color_des);\nimagefill($src, 0, 0, $color_src);\nvar_dump(imagecopymergegray($des, $src, 20, 20, 0, 0, 50, 50, 75));\n$color = imagecolorat($des, 30, 30);\n$rgb = imagecolorsforindex($des, $color);\necho $rgb['red'], \", \", $rgb['green'], \", \", $rgb['blue'], \"\\n\";\n?>")).toMatchSnapshot();
  });
});
