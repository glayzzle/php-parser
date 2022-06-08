// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagegd_truecolor.phpt
  it("imagegd() writes truecolor images without palette conversion", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreatetruecolor(10, 10);\n$white = imagecolorallocate($im, 255, 255, 255);\nimagefilledrectangle($im, 0,0, 9,9, $white);\n$blue = imagecolorallocate($im, 0, 0, 255);\nimagefilledrectangle($im, 3,3, 6,6, $blue);\nob_start();\nimagegd($im);\n$buffer = ob_get_clean();\n$header = unpack('nsignature/nwidth/nheight/Ctruecolor', $buffer);\nprintf(\"signature: %d\\n\", $header['signature']);\nprintf(\"truecolor: %d\\n\", $header['truecolor']);\nprintf(\"size: %d\\n\", strlen($buffer));\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'imagegd_truecolor.png', $im);\n?>")).toMatchSnapshot();
  });
});
