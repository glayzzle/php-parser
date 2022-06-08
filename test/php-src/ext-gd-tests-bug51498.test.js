// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug51498.phpt
  it("Bug #51498 (imagefilledellipse does not work for large circles)", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(2200, 2200);\n$white = imagecolorallocate($img, 255, 255, 255);\nimagefilledellipse($img, 1100, 1100, 2200, 2200, $white);\nrequire_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug51498_exp.png', $img);\n?>")).toMatchSnapshot();
  });
});
