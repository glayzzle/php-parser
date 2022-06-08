// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72337.phpt
  it(" #72337\tsegfault in imagescale with new dimensions being <=0)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(1, 1);\nimagescale($im, 0, 0, IMG_BICUBIC_FIXED);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
