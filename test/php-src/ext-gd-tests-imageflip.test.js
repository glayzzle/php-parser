// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageflip.phpt
  it("Testing imageflip() of GD library", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor( 99, 99 );\nimagesetpixel($im, 0, 0, 0xFF);\nimagesetpixel($im, 0, 98, 0x00FF00);\nimagesetpixel($im, 98, 0, 0xFF0000);\nimagesetpixel($im, 98, 98, 0x0000FF);\nimageflip($im, IMG_FLIP_HORIZONTAL);\nimageflip($im, IMG_FLIP_VERTICAL);\nimageflip($im, IMG_FLIP_BOTH);\nvar_dump(dechex(imagecolorat($im, 0, 0)));\nvar_dump(dechex(imagecolorat($im, 0, 98)));\nvar_dump(dechex(imagecolorat($im, 98, 0)));\nvar_dump(dechex(imagecolorat($im, 98, 98)));\n?>")).toMatchSnapshot();
  });
});
