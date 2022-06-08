// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug37346.phpt
  it("Bug #37346 (gdimagecreatefromgif, bad colormap)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromgif(__DIR__ . '/bug37346.gif');\n?>")).toMatchSnapshot();
  });
});
