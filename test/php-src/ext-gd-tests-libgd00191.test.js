// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/libgd00191.phpt
  it("libgd FS#191 (A circle becomes square)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(100, 100);\nimagefilledrectangle($im, 0, 0, 100, 100, imagecolorallocate($im, 255, 255, 255));\nimagesetthickness($im, 20);\nimagefilledellipse($im, 30, 50, 20, 20, imagecolorallocate($im, 0, 0, 0));\n$index = imagecolorat($im, 12, 28);\n$arr = imagecolorsforindex($im, $index);\nif ($arr['red'] == 255 && $arr['green'] == 255 && $arr['blue'] == 255) {\n    echo \"Ok\";\n} else {\n    echo \"failed\";\n}\n?>")).toMatchSnapshot();
  });
});
