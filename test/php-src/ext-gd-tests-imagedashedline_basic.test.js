// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagedashedline_basic.phpt
  it("imagedashedline()", function () {
    expect(parser.parseCode("<?php\necho \"Simple test of imagedashedline() function\\n\";\n$dest = dirname(realpath(__FILE__)) . '/imagedashedline.png';\n// create a blank image\n$image = imagecreatetruecolor(250, 250);\n// set the background color to black\n$bg = imagecolorallocate($image, 0, 0, 0);\n// red dashed lines\n$col_line = imagecolorallocate($image, 255, 0, 0);\n// draw a couple of vertical dashed lines\nimagedashedline($image, 100, 20, 100, 230, $col_line );\nimagedashedline($image, 150, 20, 150, 230, $col_line );\n// output the picture to a file\nimagepng($image, $dest);\n//check color of a point on edge..\n$col1 = imagecolorat($image, 100, 230);\n// ..and a point on background\n$col2 = imagecolorat($image, 5, 5);\n$color1 = imagecolorsforindex($image, $col1);\n$color2 = imagecolorsforindex($image, $col2);\nvar_dump($color1, $color2);\nimagedestroy($image);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
