// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77200.phpt
  it("Bug #77200 (imagecropauto(…, GD_CROP_SIDES) crops left but not right)", function () {
    expect(parser.parseCode("<?php\n$orig = imagecreatetruecolor(8, 8);\n$red = imagecolorallocate($orig, 255, 0, 0);\n$green = imagecolorallocate($orig, 0, 255, 0);\n$blue = imagecolorallocate($orig, 0, 0, 255);\nimagefilledrectangle($orig, 0, 0, 3, 3, $green); // tl\nimagefilledrectangle($orig, 4, 0, 7, 3, $red);   // tr\nimagefilledrectangle($orig, 0, 4, 3, 7, $green); // bl\nimagefilledrectangle($orig, 4, 4, 7, 7, $blue);  // br\n$cropped = imagecropauto($orig, IMG_CROP_SIDES);\nvar_dump(imagesx($cropped));\nimagefilledrectangle($orig, 0, 0, 3, 3, $red);   // tl\nimagefilledrectangle($orig, 4, 0, 7, 3, $green); // tr\nimagefilledrectangle($orig, 0, 4, 3, 7, $blue);  // bl\nimagefilledrectangle($orig, 4, 4, 7, 7, $green); // br\n$cropped = imagecropauto($orig, IMG_CROP_SIDES);\nvar_dump(imagesx($cropped));\n?>")).toMatchSnapshot();
  });
});
