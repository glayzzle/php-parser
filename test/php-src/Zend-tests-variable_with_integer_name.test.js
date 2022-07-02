// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variable_with_integer_name.phpt
  it("Variable with integer name", function () {
    expect(parser.parseCode("<?php\n${10} = 42;\nvar_dump(${10});\n?>")).toMatchSnapshot();
  });
});
