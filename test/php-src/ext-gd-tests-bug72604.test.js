// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72604.phpt
  it("Bug #72604 (imagearc() ignores thickness for full arcs)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(100, 100);\nimagesetthickness($im, 5);\nimagearc($im, 50, 50, 90, 90, 0, 360, 0xffffff);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug72604.png', $im);\n?>")).toMatchSnapshot();
  });
});
