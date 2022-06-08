// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageinterlace_variation2.phpt
  it("Testing setting the interlace bit off with imageinterlace() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(100, 100);\n//setting the interlace bit to on\nimageinterlace($image, true);\n//setting de interlace bit to off\nvar_dump(imageinterlace($image, false));\nvar_dump(imageinterlace($image));\n?>")).toMatchSnapshot();
  });
});
