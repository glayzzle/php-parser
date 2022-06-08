// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug67447.phpt
  it("Bug #67447 (imagecrop() adds a black line when cropping)", function () {
    expect(parser.parseCode("<?php\n// true color\n$image = imagecreatetruecolor(500, 500);\n$red = imagecolorallocate($image, 255, 0, 0);\nimagefill($image, 0, 0, $red);\n$cropped = imagecrop($image, ['x' => 0, 'y' => 0, 'width' => 250, 'height' => 250]);\nvar_dump(imagecolorat($cropped, 249, 249) === $red);\nimagedestroy($image);\nimagedestroy($cropped);\n// palette\n$image = imagecreate(500, 500);\nimagecolorallocate($image, 0, 0, 255); // first palette color = background\n$red = imagecolorallocate($image, 255, 0, 0);\nimagefill($image, 0, 0, $red);\n$cropped = imagecrop($image, ['x' => 0, 'y' => 0, 'width' => 250, 'height' => 250]);\nvar_dump(imagecolorsforindex($cropped, imagecolorat($cropped, 249, 249)));\nimagedestroy($image);\nimagedestroy($cropped);\n?>")).toMatchSnapshot();
  });
});
