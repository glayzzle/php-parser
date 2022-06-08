// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug53640.phpt
  it("Bug #53640 (XBM images require width to be multiple of 8)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(9, 9);\nimagecolorallocate($im, 0, 0, 0); // background\n$white = imagecolorallocate($im, 255, 255, 255);\nimagefilledrectangle($im, 2, 2, 6, 6, $white);\nimagexbm($im, NULL);\n?>")).toMatchSnapshot();
  });
});
