// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72482.phpt
  it("Bug #72482 (Ilegal write/read access caused by gdImageAALine overflow)", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(13, 1007);\nimageantialias($img, true);\nimageline($img, 0, 0, 1073745919, 1073745919, 4096);\n$img = imagecreatetruecolor(100, 100);\nimageantialias($img, true);\nimageline($img, 1094795585, 0, 2147483647, 255, 0xff);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
