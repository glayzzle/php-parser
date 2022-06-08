// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/libgd00106.phpt
  it("libgd #106 (imagerectangle 1x1 draws 1x3)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10,10);\nimagerectangle($im, 1,1, 1,1, 0xFFFFFF);\n$c1 = imagecolorat($im, 1,1);\n$c2 = imagecolorat($im, 1,2);\n$c3 = imagecolorat($im, 2,1);\n$c4 = imagecolorat($im, 2,2);\nif ($c1 == 0xFFFFFF && $c2 == 0 && $c3 == 0 && $c4 == 0) {\n    echo \"Ok\";\n} else {\n    echo \"failed\";\n}\n?>")).toMatchSnapshot();
  });
});
