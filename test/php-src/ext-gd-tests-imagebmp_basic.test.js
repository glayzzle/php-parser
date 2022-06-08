// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagebmp_basic.phpt
  it("imagebmp() - basic functionality", function () {
    expect(parser.parseCode("<?php\n// create an image\n$im = imagecreate(100, 100);\nimagecolorallocate($im, 0, 0, 0);\n$white = imagecolorallocate($im, 255, 255, 255);\nimageline($im, 10,10, 89,89, $white);\n// write the md5 hash of its BMP representation\nob_start();\nimagebmp($im);\necho md5(ob_get_clean());\n?>")).toMatchSnapshot();
  });
});
