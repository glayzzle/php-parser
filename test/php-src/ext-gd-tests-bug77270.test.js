// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77270.phpt
  it("Bug #77270 (imagecolormatch Out Of Bounds Write on Heap)", function () {
    expect(parser.parseCode("<?php\n$img1 = imagecreatetruecolor(0xfff, 0xfff);\n$img2 = imagecreate(0xfff, 0xfff);\nimagecolorallocate($img2, 0, 0, 0);\nimagesetpixel($img2, 0, 0, 255);\nimagecolormatch($img1, $img2);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
