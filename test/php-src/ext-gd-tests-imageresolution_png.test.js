// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageresolution_png.phpt
  it("Set and get image resolution of PNG images", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'imageresolution_png.png';\n$exp = imagecreate(100, 100);\nimagecolorallocate($exp, 255, 0, 0);\nimageresolution($exp, 71);\nimagepng($exp, $filename);\n$act = imagecreatefrompng($filename);\nvar_dump(imageresolution($act));\nimageresolution($exp, 71, 299);\nimagepng($exp, $filename);\n$act = imagecreatefrompng($filename);\nvar_dump(imageresolution($act));\n?>")).toMatchSnapshot();
  });
});
