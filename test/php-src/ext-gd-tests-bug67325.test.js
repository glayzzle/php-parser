// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug67325.phpt
  it("Bug #67325 (imagetruecolortopalette: white is duplicated in palette)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'bug67325.jpg';\n$im = imagecreatefromjpeg($filename);\nimagetruecolortopalette($im, 0, 256);\n$white = 0;\nfor ($i = 0; $i < 256; $i++) {\n    $components = imagecolorsforindex($im, $i);\n    if ($components['red'] === 255 && $components['green'] === 255 && $components['blue'] === 255) {\n        $white++;\n    }\n}\nvar_dump($white);\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
