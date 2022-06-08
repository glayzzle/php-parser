// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug39366.phpt
  it("Bug #39366 (imagerotate does not respect alpha with angles>45)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10,10);\nimagealphablending($im, 0);\nimagefilledrectangle($im, 0,0, 8,8, 0x32FF0000);\n$rotate = imagerotate($im, 180, 0);\nimagecolortransparent($rotate,0);\nimagesavealpha($rotate, true);\n$c = imagecolorat($rotate,5,5);\nprintf(\"%X\\n\", $c);\n?>")).toMatchSnapshot();
  });
});
