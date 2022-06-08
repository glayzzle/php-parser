// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug42434.phpt
  it("Bug #42434 (ImageLine w/ antialias = 1px shorter)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10, 2);\nimagefilledrectangle($im, 0, 0, 10, 2, 0xFFFFFF);\nimageantialias($im, true);\nimageline($im, 0, 0, 10, 0, 0x000000);\nif (imagecolorat($im, 9, 0) == 0x000000) {\n    echo 'DONE';\n} else {\n    echo 'Bugged';\n}\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
