// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73161.phpt
  it("Bug #73161 (imagecreatefromgd2() may leak memory)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromgd2(__DIR__ . DIRECTORY_SEPARATOR . 'bug73161.gd2');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});
