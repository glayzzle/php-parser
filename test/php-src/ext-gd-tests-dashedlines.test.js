// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/dashedlines.phpt
  it("imageline, dashed", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(6,6);\nimagefill($im, 0,0, 0xffffff);\n$r  = 0xff0000;\n$b = 0x0000ff;\n$style = array($r, $b);\nimagesetstyle($im, $style);\n// Horizontal line\nimageline($im, 0,5, 5,5, IMG_COLOR_STYLED);\n$p1 = imagecolorat($im, 0,5) == $r;\n$p2 = imagecolorat($im, 1,5) == $b;\n$p3 = imagecolorat($im, 2,5) == $r;\n$p4 = imagecolorat($im, 3,5) == $b;\n$p5 = imagecolorat($im, 4,5) == $r;\n$p5 = imagecolorat($im, 5,5) == $b;\nif ($p1 && $p2 && $p3 && $p4 && $p5) {\n    echo \"Horizontal: ok\\n\";\n}\nimagedestroy($im);\n$im = imagecreatetruecolor(6,6);\nimagefill($im, 0,0, 0xffffff);\n$style = array($r, $b);\nimagesetstyle($im, $style);\nimageline($im, 2,0, 2,5, IMG_COLOR_STYLED);\n$p1 = imagecolorat($im, 2,0) == $r;\n$p2 = imagecolorat($im, 2,1) == $b;\n$p3 = imagecolorat($im, 2,2) == $r;\n$p4 = imagecolorat($im, 2,3) == $b;\n$p5 = imagecolorat($im, 2,4) == $r;\n$p6 = imagecolorat($im, 2,5) == $b;\nif ($p1 && $p2 && $p3 && $p4 && $p5 && $p6) {\n    echo \"Vertical: ok\\n\";\n}\nimagedestroy($im);\n$im = imagecreatetruecolor(6,6);\nimagefill($im, 0,0, 0xffffff);\n$style = array($r, $b);\nimagesetstyle($im, $style);\nimageline($im, 0,0, 5,5, IMG_COLOR_STYLED);\n$p1 = imagecolorat($im, 0,0) == $r;\n$p2 = imagecolorat($im, 1,1) == $b;\n$p3 = imagecolorat($im, 2,2) == $r;\n$p4 = imagecolorat($im, 3,3) == $b;\n$p5 = imagecolorat($im, 4,4) == $r;\n$p6 = imagecolorat($im, 5,5) == $b;\nif ($p1 && $p2 && $p3 && $p4 && $p5 && $p6) {\n    echo \"Diagonal: ok\\n\";\n}\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
