// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug38112.phpt
  it("Bug #38112 (GIF Invalid Code size ).", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromgif(__DIR__ . '/bug38112.gif');\n?>")).toMatchSnapshot();
  });
});
