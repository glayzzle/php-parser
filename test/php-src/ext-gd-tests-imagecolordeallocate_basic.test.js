// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolordeallocate_basic.phpt
  it("Testing imagecolordeallocate() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\n$white = imagecolorallocate($image, 255, 255, 255);\n$result = imagecolordeallocate($image, $white);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
