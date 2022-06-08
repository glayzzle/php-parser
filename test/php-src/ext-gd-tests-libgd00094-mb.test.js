// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/libgd00094-mb.phpt
  it("libgd #94 (imagecreatefromxbm can crash if gdImageCreate fails)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromxbm(__DIR__ . '/libgd00094私はガラスを食べられます.xbm');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});
