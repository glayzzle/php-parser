// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagelayereffect_basic.phpt
  it("Testing imagelayereffect() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\n$layer = imagelayereffect($image, IMG_EFFECT_REPLACE);\nvar_dump((bool) $layer);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagelayereffect_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
