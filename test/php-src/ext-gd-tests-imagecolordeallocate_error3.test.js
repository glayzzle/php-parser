// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolordeallocate_error3.phpt
  it("Testing imagecolordeallocate() of GD library with Out of range integers (Above)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/func.inc';\n$image = imagecreate(180, 30);\n$white = imagecolorallocate($image, 255, 255, 255);\n$totalColors = imagecolorstotal($image);\ntrycatch_dump(\n    fn() => imagecolordeallocate($image, $totalColors + 100)\n);\n?>")).toMatchSnapshot();
  });
});
