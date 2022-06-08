// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug37360.phpt
  it("Bug #37360 (gdimagecreatefromgif, bad image sizes)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromgif(__DIR__ . '/bug37360.gif');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});
