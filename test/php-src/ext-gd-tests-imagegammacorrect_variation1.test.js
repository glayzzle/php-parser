// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagegammacorrect_variation1.phpt
  it("Testing imagegammacorrect() of GD library with non TrueColor image", function () {
    expect(parser.parseCode("<?php\n$image = imagecreate(150, 150);\n$grey = imagecolorallocate($image,6,6,6);\n$gray = imagecolorallocate($image,15,15,15);\n$half =  imagefilledarc ( $image, 75, 75, 70, 70, 0, 180, $grey, IMG_ARC_PIE );\n$half2 =  imagefilledarc ( $image, 75, 75, 70, 70, 0, -180, $gray, IMG_ARC_PIE );\n$gamma = imagegammacorrect($image, 1, 5);\nvar_dump((bool) $gamma);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagegammacorrect_variation1.png', $image);\n?>")).toMatchSnapshot();
  });
});
