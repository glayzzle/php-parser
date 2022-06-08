// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug64641.phpt
  it("Bug #64641 (imagefilledpolygon doesn't draw horizontal line)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/similarity.inc';\n$im = imagecreatetruecolor(640, 480);\n$points = array(\n    100, 100,\n    100, 200,\n    100, 300\n);\nimagefilledpolygon($im, $points, 0xFFFF00);\n$points = array(\n    300, 200,\n    400, 200,\n    500, 200\n);\nimagefilledpolygon($im, $points, 0xFFFF00);\n$ex = imagecreatefrompng(__DIR__ . '/bug64641.png');\nif (($diss = calc_image_dissimilarity($ex, $im)) < 1e-5) {\n    echo \"IDENTICAL\";\n} else {\n    echo \"DISSIMILARITY: $diss\";\n}\nimagedestroy($ex);\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
