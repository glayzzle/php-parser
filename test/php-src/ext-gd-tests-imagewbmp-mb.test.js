// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagewbmp-mb.phpt
  it("imagewbmp", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/im私はガラスを食べられます.wbmp';\n$im = imagecreatetruecolor(6,6);\nimagefill($im, 0,0, 0xffffff);\nimagesetpixel($im, 3,3, 0x0);\nimagewbmp($im, $file);\n$im2 = imagecreatefromwbmp($file);\necho 'test create wbmp: ';\n$c = imagecolorsforindex($im2, imagecolorat($im2, 3,3));\n$failed = false;\nforeach ($c as $v) {\n    if ($v != 0) {\n        $failed = true;\n    }\n}\necho !$failed ? 'ok' : 'failed';\necho \"\\n\";\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
