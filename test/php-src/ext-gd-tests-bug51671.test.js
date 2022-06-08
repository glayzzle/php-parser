// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug51671.phpt
  it("Bug #51671 (imagefill does not work correctly for small images)", function () {
    expect(parser.parseCode("<?php\n$w = 1;\n$h = 50;\n$im = imagecreatetruecolor($w, $h);\n$white = imagecolorallocate($im, 255, 255, 255);\nimagefill($im, 0, 0, $white);\nfor ($iy = 0; $iy < $h; $iy++) {\n        if (($c = imagecolorat($im, 0, $iy)) != $white) {\n                printf(\"Failed, (0, $iy) is %X\\n\", $c);\n        }\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
