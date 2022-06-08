// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagerotate_overflow.phpt
  it("imagerotate() overflow with negative numbers", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(10, 10);\n$tmp = imagerotate ($im, 5, -9999999);\nvar_dump($tmp);\nif ($tmp) {\n        imagedestroy($tmp);\n}\nif ($im) {\n        imagedestroy($im);\n}\n?>")).toMatchSnapshot();
  });
});
