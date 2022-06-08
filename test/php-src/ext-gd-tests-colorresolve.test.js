// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/colorresolve.phpt
  it("imagecolorresolve", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(5,5);\n$c = imagecolorresolve($im, 255,0,255);\nprintf(\"%X\\n\", $c);\nimagedestroy($im);\n$im = imagecreate(5,5);\n$c = imagecolorresolve($im, 255,0,255);\nprint_r(imagecolorsforindex($im, $c));\nimagedestroy($im);\n$im = imagecreate(5,5);\nfor ($i=0; $i<255; $i++) imagecolorresolve($im, $i,0,0);\n$c = imagecolorresolve($im, 255,0,0);\nprint_r(imagecolorsforindex($im, $c));\n$im = imagecreate(5,5);\nfor ($i=0; $i<256; $i++) {\n    if ($i == 246) {\n        imagecolorresolve($im, $i,10,10);\n    } else {\n        imagecolorresolve($im, $i,0,0);\n    }\n}\n$c = imagecolorresolve($im, 255,10,10);\nprint_r(imagecolorsforindex($im, $c));\n// with alpha\n$im = imagecreatetruecolor(5,5);\n$c = imagecolorresolvealpha($im, 255,0,255, 100);\nprintf(\"%X\\n\", $c);\nimagedestroy($im);\n$im = imagecreate(5,5);\n$c = imagecolorresolvealpha($im, 255,0,255,100);\nprint_r(imagecolorsforindex($im, $c));\nimagedestroy($im);\n$im = imagecreate(5,5);\nfor ($i=0; $i<255; $i++) imagecolorresolvealpha($im, $i,0,0,1);\n$c = imagecolorresolvealpha($im, 255,0,0,1);\nprint_r(imagecolorsforindex($im, $c));\n$im = imagecreate(5,5);\nfor ($i=0; $i<256; $i++) {\n    if ($i == 246) {\n        imagecolorresolvealpha($im, $i,10,10,1);\n    } else {\n        imagecolorresolvealpha($im, $i,0,0,100);\n    }\n}\n$c = imagecolorresolvealpha($im, 255,10,10,0);\nprint_r(imagecolorsforindex($im, $c));\n?>")).toMatchSnapshot();
  });
});
