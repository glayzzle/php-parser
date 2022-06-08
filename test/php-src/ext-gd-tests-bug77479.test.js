// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77479.phpt
  it("Bug #77479 (imagewbmp() segfaults with very large image)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(40000, 20000);\nimagecolorallocate($im, 0, 0, 0);\nimagewbmp($im, __DIR__ . '/77479.wbmp');\n?>")).toMatchSnapshot();
  });
});
