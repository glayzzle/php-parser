// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77272.phpt
  it("Bug #77272 (imagescale() may return image resource on failure)", function () {
    expect(parser.parseCode("<?php\n$img = imagecreate(2**28, 1);\nvar_dump(imagescale($img, 1, 1, IMG_TRIANGLE));\n?>")).toMatchSnapshot();
  });
});
