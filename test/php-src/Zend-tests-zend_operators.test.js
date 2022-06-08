// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/zend_operators.phpt
  it("Operator precedence", function () {
    expect(parser.parseCode("<?php\nvar_dump((object)1 instanceof stdClass);\nvar_dump(! (object)1 instanceof Exception);\n?>")).toMatchSnapshot();
  });
});
