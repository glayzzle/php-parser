// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_coalesce_empty_dim.phpt
  it("Constant expressions with empty dimension fetch on coalesce", function () {
    expect(parser.parseCode("<?php\nconst A = [][] ?? 1;\n?>")).toMatchSnapshot();
  });
});
