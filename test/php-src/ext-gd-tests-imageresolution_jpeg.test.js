// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageresolution_jpeg.phpt
  it("Set and get image resolution of JPEG images", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'imageresolution_jpeg.jpeg';\n$exp = imagecreate(100, 100);\nimagecolorallocate($exp, 255, 0, 0);\nimageresolution($exp, 71);\nimagejpeg($exp, $filename);\n$act = imagecreatefromjpeg($filename);\nvar_dump(imageresolution($act));\nimageresolution($exp, 71, 299);\nimagejpeg($exp, $filename);\n$act = imagecreatefromjpeg($filename);\nvar_dump(imageresolution($act));\n?>")).toMatchSnapshot();
  });
});
