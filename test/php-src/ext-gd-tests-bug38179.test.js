// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug38179.phpt
  it("Bug #38179 (imagecopy from a palette to a truecolor image loses alpha channel)", function () {
    expect(parser.parseCode("<?php\n$src = imagecreate(5,5);\n$c0 = imagecolorallocate($src, 255,255,255);\n$c1 = imagecolorallocatealpha($src, 255,0,0,70);\nimagealphablending($src, 0);\nimagefill($src, 0,0, $c1);\n$dst_tc = imagecreatetruecolor(5,5);\nimagealphablending($dst_tc, 0);\nimagecopy($dst_tc, $src, 0,0, 0,0, imagesx($src), imagesy($src));\n$p1 = imagecolorat($dst_tc, 3,3);\nprintf(\"%X\\n\", $p1);\nimagedestroy($src); imagedestroy($dst_tc);\n?>")).toMatchSnapshot();
  });
});
