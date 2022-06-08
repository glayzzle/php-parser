// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageinterlace_basic.phpt
  it("Testing imageinterlace() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(100, 100);\nvar_dump(imageinterlace($image));\n?>")).toMatchSnapshot();
  });
});
