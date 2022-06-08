// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73272.phpt
  it("Bug #73272 (imagescale() is not affected by, but affects imagesetinterpolation())", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$src = imagecreatetruecolor(100, 100);\nimagefilledrectangle($src, 0,0, 99,99, 0xFFFFFF);\nimageellipse($src, 49,49, 40,40, 0x000000);\nimagesetinterpolation($src, IMG_NEAREST_NEIGHBOUR);\nimagescale($src, 200, 200, IMG_BILINEAR_FIXED);\n$dst = imagerotate($src, 60, 0xFFFFFF);\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'bug73272.png', $dst);\n?>")).toMatchSnapshot();
  });
});
