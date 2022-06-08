// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefontwidth_basic.phpt
  it("Testing imagefontwidth() of GD library", function () {
    expect(parser.parseCode("<?php\nvar_dump(imagefontwidth(1),imagefontwidth(2),imagefontwidth(3),imagefontwidth(4),imagefontwidth(5));\nvar_dump(imagefontwidth(1) < imagefontwidth(5));\n?>")).toMatchSnapshot();
  });
});
