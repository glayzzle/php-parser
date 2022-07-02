// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variable_with_boolean_name.phpt
  it("Variable with boolean name", function () {
    expect(parser.parseCode("<?php\n${true} = 42;\nvar_dump(${true});\nvar_dump(${'1'});\n?>")).toMatchSnapshot();
  });
});
