// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug45799.phpt
  it("Bug #45799 (imagepng() crashes on empty image).", function () {
    expect(parser.parseCode("<?php\n$img = imagecreate(500,500);\nimagepng($img);\nimagedestroy($img);\n?>")).toMatchSnapshot();
  });
});
