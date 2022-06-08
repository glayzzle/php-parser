// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66590.phpt
  it("Bug #66590 (imagewebp() doesn't pad to even length)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug66590.webp';\n$im = imagecreatetruecolor(75, 75);\n$red = imagecolorallocate($im, 255, 0, 0);\nimagefilledrectangle($im, 0, 0, 74, 74, $red);\nimagewebp($im, $filename);\n$stream = fopen($filename, 'rb');\nfread($stream, 4); // skip \"RIFF\"\n$length = fread($stream, 4);\nfclose($stream);\n$length = unpack('V', $length)[1] + 8;\nvar_dump($length === filesize($filename));\n?>")).toMatchSnapshot();
  });
});
