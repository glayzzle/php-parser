// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77700.phpt
  it("Bug #77700 (Writing truecolor images as GIF ignores interlace flag)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10, 10);\nimagefilledrectangle($im, 0, 0, 9, 9, imagecolorallocate($im, 255, 255, 255));\nimageinterlace($im, true);\nimagegif($im, __DIR__ . 'bug77700.gif');\n$im = imagecreatefromgif(__DIR__ . 'bug77700.gif');\nvar_dump(imageinterlace($im));\n?>")).toMatchSnapshot();
  });
});
