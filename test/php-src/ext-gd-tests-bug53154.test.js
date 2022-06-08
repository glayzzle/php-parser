// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug53154.phpt
  it("Bug #53154 (Zero-height rectangle has whiskers)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(100, 10);\n$red = imagecolorallocate($im, 255, 0, 0);\nimagerectangle($im, 5, 5, 95, 5, $red);\nvar_dump(imagecolorat($im, 5, 4) !== $red);\nvar_dump(imagecolorat($im, 5, 6) !== $red);\nvar_dump(imagecolorat($im, 95, 4) !== $red);\nvar_dump(imagecolorat($im, 95, 6) !== $red);\n?>")).toMatchSnapshot();
  });
});
