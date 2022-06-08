// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug38212.phpt
  it("Bug #38212 (Seg Fault on invalid imagecreatefromgd2part() parameters)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\n$file = __DIR__ . '/bug38212.gd2';\n$im1 = imagecreatetruecolor(10,100);\nimagefill($im1, 0,0, 0xffffff);\nimagegd2($im1, $file);\ntrycatch_dump(\n    fn() => imagecreatefromgd2part($file, 0,0, -25, 10),\n    fn() => imagecreatefromgd2part($file, 0,0, 10, -25)\n);\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
