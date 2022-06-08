// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefill_1.phpt
  it("imagefill() infinite loop with wrong color index", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(100,100);\n$white = imagecolorallocate($im, 255,255,255);\n$blue = imagecolorallocate($im, 0,0,255);\n$green = imagecolorallocate($im, 0,255,0);\nprint_r(imagecolorat($im, 0,0));\nimagefill($im, 0,0,$white + 3);\nprint_r(imagecolorat($im, 0,0));\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
