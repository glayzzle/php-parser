// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug39508.phpt
  it("Bug #39508 (imagefill crashes with small images 3 pixels or less)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(3,1);\n$bgcolor = imagecolorallocatealpha($im,255, 255, 0, 0);\nimagefill($im,0,0,$bgcolor);\nprint_r(imagecolorat($im, 1,0));\n?>")).toMatchSnapshot();
  });
});
