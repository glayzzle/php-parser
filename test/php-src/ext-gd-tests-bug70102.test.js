// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug70102.phpt
  it("Bug #70102 (imagecreatefromwebm() shifts colors)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ .  '/bug70102.webp';\n$im = imagecreatetruecolor(8, 8);\n$white = imagecolorallocate($im, 255, 255, 255);\nvar_dump($white & 0xffffff);\nimagefilledrectangle($im, 0, 0, 7, 7, $white);\nimagewebp($im, $filename);\nimagedestroy($im);\n$im = imagecreatefromwebp($filename);\n$color = imagecolorat($im, 4, 4);\nvar_dump($color & 0xffffff);\n?>")).toMatchSnapshot();
  });
});
