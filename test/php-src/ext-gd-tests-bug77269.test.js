// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77269.phpt
  it("Bug #77269 (Potential unsigned underflow in gdImageScale)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(2**28, 1);\nimagescale($im, 1, 1, IMG_TRIANGLE);\n?>")).toMatchSnapshot();
  });
});
