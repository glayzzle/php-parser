// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/colorat.phpt
  it("imagecolorat", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/im.wbmp';\n$im = imagecreatetruecolor(6,6);\nimagefill($im, 0,0, 0xffffff);\nimagesetpixel($im, 3,3, 0x0);\necho 'test colorat truecolor: ';\n$c = imagecolorat($im, 3,3);\necho $c == 0x0 ? 'ok' : 'failed';\necho \"\\n\";\nimagedestroy($im);\n$im = imagecreate(6,6);\n$c1 = imagecolorallocate($im, 255,255,255);\n$c2 = imagecolorallocate($im, 0,0,0);\nimagefill($im, 0,0, $c1);\nimagesetpixel($im, 3,3, $c2);\necho 'test colorat palette: ';\n$c = imagecolorsforindex($im, imagecolorat($im, 3,3));\n$failed = false;\nforeach ($c as $v) {\n    if ($v != 0) {\n        $failed = true;\n    }\n}\necho !$failed ? 'ok' : 'failed';\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
