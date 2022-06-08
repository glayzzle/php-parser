// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug75124.phpt
  it("Bug #75124 (gdImageGrayScale() may produce colors)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefrompng(__DIR__ . '/bug75124.png');\nvar_dump(imageistruecolor($im));\nimagefilter($im, IMG_FILTER_GRAYSCALE);\nfor ($i = 0, $width = imagesx($im); $i < $width; $i ++) {\n    for ($j = 0, $height = imagesy($im); $j < $height; $j++) {\n        $color = imagecolorat($im, $i, $j);\n        $red = ($color >> 16) & 0xff;\n        $green = ($color >> 8) & 0xff;\n        $blue = $color & 0xff;\n        if ($red != $green || $green != $blue) {\n            echo \"non grayscale pixel detected\\n\";\n            break 2;\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
