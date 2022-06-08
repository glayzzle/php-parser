// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gdimage_prevent_cloning.phpt
  it("Checks that GdImage instances cannot be cloned", function () {
    expect(parser.parseCode("<?php\n    $img_src = imagecreatetruecolor(32, 32);\n    $img_dst = clone $img_src;\n?>")).toMatchSnapshot();
  });
});
