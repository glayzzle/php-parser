// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug76041.phpt
  it("Bug #76041 (null pointer access crashed php)", function () {
    expect(parser.parseCode("<?php\n$im=imagecreate(100, 100);\nimageantialias($im, true);\nimageline($im, 0, 0, 10, 10, 0xffffff);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
