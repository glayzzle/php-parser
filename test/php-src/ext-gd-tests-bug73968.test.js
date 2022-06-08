// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73968.phpt
  it("Bug #73968 (Premature failing of XBM reading)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromxbm(__DIR__ . DIRECTORY_SEPARATOR . 'bug73968.xbm');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});
