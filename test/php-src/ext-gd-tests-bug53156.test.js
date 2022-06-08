// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug53156.phpt
  it("Bug #53156 (imagerectangle problem with point ordering)", function () {
    expect(parser.parseCode("<?php\nfunction draw_and_check_pixel($x, $y)\n{\n    global $img, $black, $red;\n    echo (imagecolorat($img, $x, $y) === $black) ? '+' : '-';\n    imagesetpixel($img, $x, $y, $red);\n}\nfunction draw_and_check_rectangle($x1, $y1, $x2, $y2)\n{\n    global $img, $black;\n    echo 'Rectangle: ';\n    imagerectangle($img, $x1, $y1, $x2, $y2, $black);\n    $x = ($x1 + $x2) / 2;\n    $y = ($y1 + $y2) / 2;\n    draw_and_check_pixel($x,  $y1);\n    draw_and_check_pixel($x1, $y);\n    draw_and_check_pixel($x,  $y2);\n    draw_and_check_pixel($x2, $y);\n    echo PHP_EOL;\n}\n$img = imagecreate(110, 210);\n$bgnd  = imagecolorallocate($img, 255, 255, 255);\n$black = imagecolorallocate($img,   0,   0,   0);\n$red   = imagecolorallocate($img, 255,   0,   0);\ndraw_and_check_rectangle( 10,  10,  50,  50);\ndraw_and_check_rectangle( 50,  60,  10, 100);\ndraw_and_check_rectangle( 50, 150,  10, 110);\ndraw_and_check_rectangle( 10, 200,  50, 160);\nimagesetthickness($img, 4);\ndraw_and_check_rectangle( 60,  10, 100,  50);\ndraw_and_check_rectangle(100,  60,  60, 100);\ndraw_and_check_rectangle(100, 150,  60, 110);\ndraw_and_check_rectangle( 60, 200, 100, 160);\n//imagepng($img, __DIR__ . '/bug53156.png'); // debug\n?>")).toMatchSnapshot();
  });
});
