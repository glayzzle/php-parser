// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagetruecolortopalette_basic.phpt
  it("Testing imagetruecolortopalette() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(150, 150);\n$a = imagecolorallocate($image,255,0,255);\n$b = imagecolorallocate($image,0,255,255);\n$half =  imagefilledarc ( $image, 75, 75, 70, 70, 0, 180, $a, IMG_ARC_PIE );\n$half2 =  imagefilledarc ( $image, 75, 55, 80, 70, 0, -180, $b, IMG_ARC_PIE );\nvar_dump(imagetruecolortopalette($image, true, 2));\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagetruecolortopalette_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
