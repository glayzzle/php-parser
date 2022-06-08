// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefilter_error13.phpt
  it("Testing wrong parameter value of COLORIZE in imagefilter() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\nvar_dump(imagefilter($image, IMG_FILTER_COLORIZE, 800, 255, 255)); // Wrong value is truncated to 255\n?>")).toMatchSnapshot();
  });
});
