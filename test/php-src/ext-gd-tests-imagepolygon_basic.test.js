// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagepolygon_basic.phpt
  it("imagepolygon()", function () {
    expect(parser.parseCode("<?php\necho \"Simple test of imagepolygon() function\\n\";\n$dest = dirname(realpath(__FILE__)) . '/imagepolygon.png';\n// create a blank image\n$image = imagecreatetruecolor(400, 300);\n// set the background color to black\n$bg = imagecolorallocate($image, 0, 0, 0);\n// draw a red polygon\n$col_poly = imagecolorallocate($image, 255, 0, 0);\n// draw the polygon\nimagepolygon($image, array (\n        0,   0,\n        100, 200,\n        300, 200\n    ),\n    $col_poly);\n// output the picture to a file\nimagepng($image, $dest);\n$col1 = imagecolorat($image, 100, 200);\n$col2 = imagecolorat($image, 100, 100);\n$color1 = imagecolorsforindex($image, $col1);\n$color2 = imagecolorsforindex($image, $col2);\nvar_dump($color1, $color2);\nimagedestroy($image);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
