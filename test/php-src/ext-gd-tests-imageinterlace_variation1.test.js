// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageinterlace_variation1.phpt
  it("Testing setting the interlace bit on with imageinterlace() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(100, 100);\nvar_dump(imageinterlace($image, true));\nvar_dump(imageinterlace($image));\n?>")).toMatchSnapshot();
  });
});
