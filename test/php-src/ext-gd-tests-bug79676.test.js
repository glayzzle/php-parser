// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug79676.phpt
  it("Bug #79676 (imagescale adds black border with IMG_BICUBIC)", function () {
    expect(parser.parseCode("<?php\nfunction test($image, $desc)\n{\n    echo \"$desc - Test Result: \",\n        (imagecolorat($image, imagesx($image) - 1 , imagesy($image) - 1) != 0x000000 ? 'pass' : 'fail'),\n        PHP_EOL;\n}\n$size = 32;\n$src = imagecreatetruecolor($size, $size);\nimagefilledrectangle($src, 0, 0, $size - 1 , $size - 1, 0xff00ff);\ntest($src, 'No scaling');\ntest(imagescale($src, $size * 2, $size * 2), 'Scale 200%, default mode');\ntest(imagescale($src, $size / 2, $size / 2), 'Scale 50%, default mode');\ntest(imagescale($src, $size * 2, $size * 2, IMG_BICUBIC), 'Scale 200%, IMG_BICUBIC mode');\ntest(imagescale($src, $size / 2, $size / 2, IMG_BICUBIC), 'Scale 50%, IMG_BICUBIC mode');\n?>")).toMatchSnapshot();
  });
});
