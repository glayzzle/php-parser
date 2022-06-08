// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72482_2.phpt
  it("Bug 72482 (Ilegal write/read access caused by gdImageAALine overflow)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreatetruecolor(10, 10);\nimagefilledrectangle($im, 0, 0, 9, 9, imagecolorallocate($im, 255, 255, 255));\nimageantialias($im, true);\nimageline($im, 0, 0, 10, 10, imagecolorallocate($im, 0, 0, 0));\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'bug72482_2.png', $im);\n?>")).toMatchSnapshot();
  });
});
