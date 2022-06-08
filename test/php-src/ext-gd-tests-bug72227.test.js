// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72227.phpt
  it("Bug #72227: imagescale out-of-bounds read", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor ( 100, 100);\nimagescale($img, 13, 1, IMG_BICUBIC);\n?>\nDONE")).toMatchSnapshot();
  });
});
