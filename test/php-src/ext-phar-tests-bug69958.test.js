// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69958.phpt
  it("Phar: bug #69958: Segfault in Phar::convertToData on invalid file", function () {
    expect(parser.parseCode("<?php\n$tarphar = new PharData(__DIR__.'/bug69958.tar');\n$phar = $tarphar->convertToData(Phar::TAR);\n?>")).toMatchSnapshot();
  });
});
