// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/libgd00186.phpt
  it("libgd #186 (Tiling true colour with palette image does not work)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10,10);\n$tile = imagecreate(10,10);\n$red   = imagecolorallocate($tile,0xff,0,0);\n$green = imagecolorallocate($tile,0,0xff,0);\n$blue  = imagecolorallocate($tile,0,0,0xff);\n$other = imagecolorallocate($tile,0,0,0x2);\nimagefilledrectangle($tile,0,0,2,10,$red);\nimagefilledrectangle($tile,3,0,4,10,$green);\nimagefilledrectangle($tile,5,0,7,10,$blue);\nimagefilledrectangle($tile,8,0,9,10,$other);\nimagecolortransparent($tile,$blue);\nimagesettile($im,$tile);\nfor ($i=0; $i<10; $i++) {\n  imagesetpixel($im,$i,$i,IMG_COLOR_TILED);\n}\n$index = imagecolorat($im,9,9);\n$arr = imagecolorsforindex($im, $index);\nif ($arr['blue'] == 2) {\n  $r = \"Ok\";\n} else {\n  $r = \"Failed\";\n}\nimagedestroy($tile);\nimagedestroy($im);\necho $r;\n?>")).toMatchSnapshot();
  });
});
