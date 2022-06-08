// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagegetclip_basic.phpt
  it("imagegetclip() - basic functionality", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(10, 10);\necho '=== original ===', PHP_EOL;\nvar_dump(imagegetclip($im));\nimagesetclip($im, 1,2, 3,4);\necho '=== after imagesetclip() ===', PHP_EOL;\nvar_dump(imagegetclip($im));\n?>")).toMatchSnapshot();
  });
});
