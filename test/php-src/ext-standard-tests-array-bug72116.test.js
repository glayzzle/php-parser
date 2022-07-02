// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug72116.phpt
  it("Bug #72116 (insertion after array_fill fails)", function () {
    expect(parser.parseCode("<?php\n$x = array_fill(0, 1, '..');\n$x[] = 'a';\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
