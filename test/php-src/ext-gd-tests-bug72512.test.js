// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72512.phpt
  it("Bug #19366 (gdimagefill() function crashes (fixed in bundled libgd))", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(100, 100);\nimagecolortransparent($img, -1000000);\nimagetruecolortopalette($img, TRUE, 3);\nimagecolortransparent($img, 9);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
