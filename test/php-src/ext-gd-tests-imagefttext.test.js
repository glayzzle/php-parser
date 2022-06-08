// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefttext.phpt
  it("imagefttext() function test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    $fontfile_8859 = \"$cwd/test8859.ttf\";\n    function testrun($im, $fontfile) {\n        $sx = imagesx($im);\n        $sy = imagesy($im);\n        $colour_w = imagecolorallocate($im, 255, 255, 255);\n        $colour_b = imagecolorallocate($im, 0, 0, 0);\n        imagefilledrectangle($im, 0, 0, $sx - 1, $sy - 1, $colour_b);\n        imagefttext($im, $sy * 0.75, 0, 0, $sy - 1, $colour_w, $fontfile, \"A\", array());\n        $cnt = 0;\n        for ($y = 0; $y < $sy; ++$y) {\n            for ($x = 0; $x < $sx; ++$x) {\n                if (imagecolorat($im, $x, $y) == $colour_b) {\n                    ++$cnt;\n                }\n            }\n        }\n        // imagecolordeallocate($im, $colour_w);\n        // imagecolordeallocate($im, $colour_b);\n        return ($cnt < ($sx * $sy));\n    }\n    $im = imagecreate(256, 256);\n    var_dump(testrun($im, $fontfile_8859));\n    imagedestroy($im);\n    $im = imagecreatetruecolor(256, 256);\n    var_dump(testrun($im, $fontfile_8859));\n    imagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
