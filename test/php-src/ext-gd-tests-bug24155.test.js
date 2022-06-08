// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug24155.phpt
  it("Bug #24155 (gdImageRotate270 rotation problem).", function () {
    expect(parser.parseCode("<?php\n    $dest = dirname(realpath(__FILE__)) . '/bug24155.png';\n    @unlink($dest);\n    $im = imagecreatetruecolor(30, 50);\n    imagefill($im, 0, 0, (16777215 - 255));\n    $im = imagerotate($im, 270, 255);\n    imagepng($im, $dest);\n    $im2 = imagecreatefrompng($dest);\n    // Uniform fill + n x 90degrees rotation , the color value does not change\n    $col = imagecolorat($im2, 20, 20);\n    // 16777215 - 255 = 16776960\n    echo \"$col\\n\";\n    @unlink($dest);\n?>")).toMatchSnapshot();
  });
});
