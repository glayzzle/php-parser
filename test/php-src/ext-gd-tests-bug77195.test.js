// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77195.phpt
  it("Bug #77195 (Incorrect error handling of imagecreatefromjpeg())", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug77195.jpg';\n@imagecreatefromjpeg($filename);\nimagecreatefromjpeg($filename);\n?>")).toMatchSnapshot();
  });
});
