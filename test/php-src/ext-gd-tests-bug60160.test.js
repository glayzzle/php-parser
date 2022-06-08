// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug60160.phpt
  it("Bug #60160 (imagefill does not work correctly for small images) @see bug51671", function () {
    expect(parser.parseCode("<?php\n$w = 3;\n$h = 50;\n$im = imagecreatetruecolor($w, $h);\n$white = imagecolorallocate($im, 255, 255, 255);\nimagefill($im, 0, 0, $white);\nfor ($ix = 0; $ix < $w; $ix++) {\n        for ($iy = 0; $iy < $h; $iy++) {\n                if (($c = imagecolorat($im, $ix, $iy)) != $white) {\n                        printf(\"Failed, ($ix, $iy) is %X\\n\", $c);\n                }\n        }\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
