// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug69024.phpt
  it("Bug #69024 (imagescale segfault with palette based image)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(256, 256);\nimagescale($im, 32, 32, IMG_BICUBIC);\nimagedestroy($im);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
