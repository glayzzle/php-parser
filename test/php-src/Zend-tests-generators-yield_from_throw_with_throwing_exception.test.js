// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_throw_with_throwing_exception.phpt
  it("Exceptions are properly appended when thrown from yield from values destruction", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n\tyield from [1, 2, new class {\n\t\tfunction __destruct() {\n\t\t\tthrow new Exception(\"dtor\");\n\t\t}\n\t}];\n}\ngen()->throw(new Exception(\"outer\"));\n?>")).toMatchSnapshot();
  });
});
