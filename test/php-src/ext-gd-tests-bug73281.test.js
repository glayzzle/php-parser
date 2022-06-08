// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73281.phpt
  it("Bug #73281 (imagescale(…, IMG_BILINEAR_FIXED) can cause black border)", function () {
    expect(parser.parseCode("<?php\n$coordinates = [[0, 0], [0, 199], [199, 199], [199, 0]];\n$src = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($src, 255, 255, 255);\nimagefilledrectangle($src, 0,0, 99,99, $white);\n$dst = imagescale($src, 200, 200, IMG_BILINEAR_FIXED);\necho \"truecolor source\\n\";\nforeach ($coordinates as $coordinate) {\n    list($x, $y) = $coordinate;\n    printf(\"%3d, %3d: %x\\n\", $x, $y, imagecolorat($dst, $x, $y));\n}\n$src = imagecreate(100, 100);\n$white = imagecolorallocate($src, 255, 255, 255);\nimagefilledrectangle($src, 0,0, 99,99, $white);\n$dst = imagescale($src, 200, 200, IMG_BILINEAR_FIXED);\necho \"\\npalette source\\n\";\nforeach ($coordinates as $coordinate) {\n    list($x, $y) = $coordinate;\n    printf(\"%3d, %3d: %x\\n\", $x, $y, imagecolorat($dst, $x, $y));\n}\n?>")).toMatchSnapshot();
  });
});
