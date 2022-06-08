// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72512_1.phpt
  it("Bug #72512 gdImageTrueColorToPaletteBody allows arbitrary write/read access, var 1", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(100, 100);\nimagecolortransparent($img, -1000000);\nimagetruecolortopalette($img, TRUE, 3);\nimagecolortransparent($img, 9);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
