// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug51263.phpt
  it("Bug #51263 (imagettftext and rotated text uses wrong baseline)", function () {
    expect(parser.parseCode("<?php\n$cwd = __DIR__;\n$ttf = \"$cwd/Tuffy.ttf\";\n$w = 23;\n$h = 70;\n$img = imagecreatetruecolor($w, $h);\n$blk = imagecolorallocate($img, 0, 0, 0);\nimagefilledrectangle($img, 0, 0, $w-1, $h-1, $blk);\n$col = imagecolorallocate($img, 255, 255, 255);\nimagettftext($img, 8, 90, 10, 60, $col, $ttf, \"foo bar qux\");\n$x = array(0, 1, 2, 3, 13);\nfor ($j=0; $j<30; $j++) {\n    foreach ($x as $i) {\n        $c = imagecolorat($img, $i, $j);\n        if ($c != 0) {\n            echo \"KO: ($i, $j)\\n\";\n            exit;\n        }\n    }\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
