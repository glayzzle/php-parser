// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/nullable_typed_return_without_value.phpt
  it("Nullable typed return without value generates friendlier error message", function () {
    expect(parser.parseCode("<?php\nfunction test() : ?int {\n    return;\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
