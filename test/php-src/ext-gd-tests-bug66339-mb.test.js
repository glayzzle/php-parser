// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66339-mb.phpt
  it("Bug #66339 (PHP segfaults in imagexbm)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(8, 8);\nimagecolorallocate($im, 0, 0, 0); // background\n$white = imagecolorallocate($im, 255, 255, 255);\nimagefilledrectangle($im, 2, 2, 6, 6, $white);\nimagexbm($im, NULL);\necho \"------------\\n\";\nimagexbm($im, './bug66339私はガラスを食べられます.xbm');\necho file_get_contents('./bug66339私はガラスを食べられます.xbm');\n?>")).toMatchSnapshot();
  });
});
