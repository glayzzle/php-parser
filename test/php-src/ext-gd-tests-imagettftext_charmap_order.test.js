// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagettftext_charmap_order.phpt
  it("Font charmap order is deterministic based on order in the font, use the selected encoding", function () {
    expect(parser.parseCode("<?php\n// this is an Apache Licensed font, see separate LICENSE file\n$font = __DIR__.'/Rochester-Regular.otf';\n// thank you Helgi\n$sample_string = \"\\xC3\\x9E\\xC3\\xB6\";\n$im = imagecreatetruecolor(\n  100,\n  80\n);\n$white = imagecolorallocate($im, 255, 255, 255);\n$black = imagecolorallocate($im, 0, 0, 0);\nimagefilledrectangle(\n  $im,\n  0,\n  0,\n  100,\n  80,\n  $white\n);\nimagettftext(\n  $im,\n  45,\n  0,\n  15,\n  60,\n  $black,\n  $font,\n  $sample_string\n);\n$w = imagesx($im);\n$h = imagesy($im);\n$black_pixels = 0;\nfor ($y = 0; $y < $h; $y++) {\n    for ($x = 0; $x < $w; $x++) {\n        $rgb = imagecolorat($im, $x, $y);\n        if ($rgb === 0) {\n          ++$black_pixels;\n        }\n    }\n}\nif ($black_pixels >= 10) {\n  printf(\"SUCCESS %d black pixels\\n\", $black_pixels);\n} else {\n  printf(\"FAIL %d black pixels\\n\", $black_pixels);\n}\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
