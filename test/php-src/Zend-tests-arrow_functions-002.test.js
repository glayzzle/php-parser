// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/002.phpt
  it("Arrow functions implicit use must be throwing notices only upon actual use", function () {
    expect(parser.parseCode("<?php\n$b = 1;\nvar_dump((fn() => $b + $c)());\n?>")).toMatchSnapshot();
  });
});
