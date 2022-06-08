// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug28147.phpt
  it("Bug #28147 (Crash with anti-aliased line)", function () {
    expect(parser.parseCode("<?php\n//\n// This script will generate a Seg Fault on Linux\n//\n$im  = imagecreatetruecolor(300, 300);\n$w  = imagecolorallocate($im, 255, 255, 255);\n$red = imagecolorallocate($im, 255, 0, 0);\nimagefilledrectangle($im,0,0,299,299,$w);\nimageantialias($im,true);\nimageline($im, 299, 299, 0, 299, $red);\nimagedestroy($im);\necho \"Alive\\n\";\n?>")).toMatchSnapshot();
  });
});
