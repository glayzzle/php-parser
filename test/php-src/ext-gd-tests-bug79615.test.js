// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug79615.phpt
  it("Bug #79615 (Wrong GIF header written in GD GIFEncode)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(3, 3); // 3x3, 9 colors, 4 bits per pixel\nfor ($x = 0; $x < 3; $x++) {\n    for ($y = 0; $y < 3; $y++) {\n        imagesetpixel($im, $x, $y, imagecolorallocate($im, $x, $y, 0));\n    }\n}\nob_start();\nimagegif($im);\necho decbin(ord(ob_get_clean()[0xA]));\n?>")).toMatchSnapshot();
  });
});
