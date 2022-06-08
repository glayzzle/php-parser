// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug39082.phpt
  it("Bug #39082 (Output image to stdout segfaults).", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(1,1);\nimagegif($im);\n?>")).toMatchSnapshot();
  });
});
