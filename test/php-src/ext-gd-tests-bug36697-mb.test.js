// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug36697-mb.phpt
  it("Bug #36697 (TrueColor transparency with GIF palette output).", function () {
    expect(parser.parseCode("<?php\n$dest = __DIR__ . \"/36697私はガラスを食べられます.gif\";\n$im = imagecreatetruecolor(192, 36);\n$trans_color = imagecolorallocate($im, 255, 0, 0);\n$color = imagecolorallocate($im, 255, 255, 255);\nimagecolortransparent($im, $trans_color);\nimagefilledrectangle($im, 0,0, 192,36, $trans_color);\n$c = imagecolorat($im, 191,35);\nimagegif($im, $dest);\nimagedestroy($im);\n$im = imagecreatefromgif($dest);\n$c = imagecolorat($im, 191, 35);\n$colors = imagecolorsforindex($im, $c);\necho $colors['red'] . ' ' . $colors['green'] . ' ' . $colors['blue'];\n@unlink($dest);\n?>")).toMatchSnapshot();
  });
});
