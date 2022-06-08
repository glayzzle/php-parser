// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73957.phpt
  it("Bug #73957 (signed integer conversion in imagescale())", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(8, 8);\n$im = imagescale($im, 0x100000001, 1);\nvar_dump($im);\nif ($im) { // which is not supposed to happen\n    var_dump(imagesx($im));\n}\n?>")).toMatchSnapshot();
  });
});
