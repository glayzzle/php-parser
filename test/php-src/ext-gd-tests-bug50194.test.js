// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug50194.phpt
  it("Bug #50194 (imagettftext broken on transparent background w/o alphablending)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreatetruecolor(240, 55);\n$background = imagecolorallocatealpha($im, 60, 60, 60, 0); // no tranparency\n$black = imagecolorallocate($im, 0, 0, 0);\nimagealphablending($im, false);\nimagefilledrectangle($im, 0, 0, 239, 54, $background);\n$text = 'Testing ... ';\n$font = __DIR__ . DIRECTORY_SEPARATOR . 'Tuffy.ttf';\nimagettftext($im, 40, 0, 10, 40, $black, $font, $text);\nimagesavealpha($im, true);\nob_start();\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'bug50194.png', $im);\n$output = ob_get_clean();\nassert(preg_match('/The images are equal|The images differ in (\\d+) pixels/', $output, $matches));\nif (isset($matches[1]) && $matches[1] > 2000) {\n    echo \"The images differ in {$matches[1]} pixels.\\n\";\n} else {\n    echo \"The images are similar.\\n\";\n}\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
