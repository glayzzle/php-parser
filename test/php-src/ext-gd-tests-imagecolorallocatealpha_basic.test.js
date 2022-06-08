// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorallocatealpha_basic.phpt
  it("Testing imagecolorallocatealpha()", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(150, 150);\n$cor = imagecolorallocate($img, 50, 100, 255);\n$corA = imagecolorallocatealpha($img, 50, 100, 255, 50);\n//$whiteA = imagecolorallocatealpha($img, 255, 255, 255, 127);\n$half =  imagefilledarc ( $img, 75, 75, 70, 70, 0, 180, $cor, IMG_ARC_PIE );\n$half2 =  imagefilledarc ( $img, 75, 75, 70, 70, 180, 360, $corA, IMG_ARC_PIE );\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagecolorallocatealpha_basic.png', $img);\nvar_dump($corA);\n?>")).toMatchSnapshot();
  });
});
