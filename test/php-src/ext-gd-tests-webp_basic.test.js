// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/webp_basic.phpt
  it("imagewebp() and imagecreatefromwebp() - basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/similarity.inc';\n$filename = __DIR__ . '/webp_basic.webp';\n$im1 = imagecreatetruecolor(75, 75);\n$white = imagecolorallocate($im1, 255, 255, 255);\n$red = imagecolorallocate($im1, 255, 0, 0);\n$green = imagecolorallocate($im1, 0, 255, 0);\n$blue = imagecolorallocate($im1, 0, 0, 255);\nimagefilledrectangle($im1, 0, 0, 74, 74, $white);\nimageline($im1, 3, 3, 71, 71, $red);\nimageellipse($im1, 18, 54, 36, 36, $green);\nimagerectangle($im1, 41, 3, 71, 33, $blue);\nimagewebp($im1, $filename);\n$im2 = imagecreatefromwebp($filename);\nimagewebp($im2, $filename);\necho 'Is lossy conversion close enough? ';\nvar_dump(calc_image_dissimilarity($im1, $im2) < 10e5);\nimagewebp($im1, $filename, IMG_WEBP_LOSSLESS);\n$im_lossless = imagecreatefromwebp($filename);\necho 'Does lossless conversion work? ';\nvar_dump(calc_image_dissimilarity($im1, $im_lossless) == 0);\n?>")).toMatchSnapshot();
  });
});
