// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefilledpolygon_basic.phpt
  it("imagefilledpolygon()", function () {
    expect(parser.parseCode("<?php\necho \"Simple test of imagefilledpolygon() function\\n\";\n$dest = dirname(realpath(__FILE__)) . '/imagefilledpolygon.png';\n$points = array(\n            40,  50,\n            20,  240,\n            60,  60,\n            240, 20,\n            50,  40,\n            10,  10\n            );\n// create a blank image\n$image = imagecreatetruecolor(250, 250);\n// set the background color to black\n$bg = imagecolorallocate($image, 0, 0, 0);\n// fill polygon with green\n$col_poly = imagecolorallocate($image, 0, 255, 0);\n// draw the polygon\nimagefilledpolygon($image, $points, $col_poly);\n// output the picture to a file\nimagepng($image, $dest);\n// get it back\n$image_in = imagecreatefrompng($dest);\n//check color of a point on edge..\n$col1 = imagecolorat($image_in, 40, 50);\n//.. a point in filled body\n$col2 = imagecolorat($image_in, 15, 15);\n// ..and a point on background\n$col3 = imagecolorat($image_in, 5, 5);\n$color1 = imagecolorsforindex($image_in, $col1);\n$color2 = imagecolorsforindex($image_in, $col2);\n$color3 = imagecolorsforindex($image_in, $col3);\nvar_dump($color1, $color2, $color3);\nimagedestroy($image);\nimagedestroy($image_in);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
