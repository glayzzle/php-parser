// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageloadfont_invalid.phpt
  it("imageloadfont() function crashes", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ .  '/font.gdf';\n$bin = \"\\x41\\x41\\x41\\x41\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x01\\x00\";\n$fp = fopen($filename, 'wb');\nfwrite($fp, $bin);\nfclose($fp);\n$image = imagecreatetruecolor(50, 20);\n$font = imageloadfont($filename);\n$black = imagecolorallocate($image, 0, 0, 0);\nimagestring($image, $font, 0, 0, \"Hello\", $black);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
