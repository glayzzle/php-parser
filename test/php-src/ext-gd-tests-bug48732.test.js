// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug48732.phpt
  it("Bug #48732 (TTF Bounding box wrong for letters below baseline)", function () {
    expect(parser.parseCode("<?php\n$cwd = __DIR__;\n$font = \"$cwd/Tuffy.ttf\";\n$g = imagecreate(100, 50);\n$bgnd  = imagecolorallocate($g, 255, 255, 255);\n$black = imagecolorallocate($g, 0, 0, 0);\n$bbox  = imagettftext($g, 12, 0, 0, 20, $black, $font, \"ABCEDFGHIJKLMN\\nopqrstu\\n\");\nimagepng($g, \"$cwd/bug48732.png\");\necho 'Left Bottom: (' . $bbox[0]  . ', ' . $bbox[1] . ')';\n?>")).toMatchSnapshot();
  });
});
