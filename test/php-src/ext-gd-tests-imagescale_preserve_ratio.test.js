// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagescale_preserve_ratio.phpt
  it("Scale images and preserve aspect ratio", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor ( 256, 384);\n$thumbnail = imagescale($img, 64, -1, IMG_BICUBIC);\nvar_dump(imagesx($thumbnail));\nvar_dump(imagesy($thumbnail));\n$thumbnail = imagescale($img, -1, 64, IMG_BICUBIC);\nvar_dump(imagesx($thumbnail));\nvar_dump(imagesy($thumbnail));\n$img = imagecreatetruecolor ( 384, 256);\n$thumbnail = imagescale($img, 64, -1, IMG_BICUBIC);\nvar_dump(imagesx($thumbnail));\nvar_dump(imagesy($thumbnail));\n$thumbnail = imagescale($img, -1, 64, IMG_BICUBIC);\nvar_dump(imagesx($thumbnail));\nvar_dump(imagesy($thumbnail));\n$img = imagecreatetruecolor ( 256, 256);\n$thumbnail = imagescale($img, 64, -1, IMG_BICUBIC);\nvar_dump(imagesx($thumbnail));\nvar_dump(imagesy($thumbnail));\n$thumbnail = imagescale($img, -1, 64, IMG_BICUBIC);\nvar_dump(imagesx($thumbnail));\nvar_dump(imagesy($thumbnail));\n?>\nDONE")).toMatchSnapshot();
  });
});
