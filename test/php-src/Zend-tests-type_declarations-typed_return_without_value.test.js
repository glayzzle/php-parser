// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_return_without_value.phpt
  it("Typed return without value generates compile-time error", function () {
    expect(parser.parseCode("<?php\nfunction test() : int {\n    return;\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
