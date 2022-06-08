// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66882.phpt
  it("Bug #66882 (imagerotate by -90 degrees truncates image by 1px)", function () {
    expect(parser.parseCode("<?php\n$im = imagerotate(imagecreate(10, 10), -90, 0);\nvar_dump(imagesy($im), imagesx($im));\n?>")).toMatchSnapshot();
  });
});
