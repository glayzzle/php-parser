// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72494.phpt
  it("Bug #72494 (imagecropauto out-of-bounds access)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\n$im = imagecreate(10,10);\ntrycatch_dump(\n    fn() => imagecropauto($im, IMG_CROP_THRESHOLD, 0, 1337)\n);\n?>")).toMatchSnapshot();
  });
});
