// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72512_0.phpt
  it("Bug #72512 gdImageTrueColorToPaletteBody allows arbitrary write/read access, var 0", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(13, 1007);\nimagecolortransparent($img, -10066304);\nimagetruecolortopalette($img, TRUE, 3);\nimagescale($img, 1, 65535);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
