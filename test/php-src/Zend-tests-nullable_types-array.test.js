// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/array.phpt
  it("Explicitly nullable array type", function () {
    expect(parser.parseCode("<?php\nfunction _array_(?array $v): ?array {\n    return $v;\n}\nvar_dump(_array_(null));\nvar_dump(_array_([]));\n?>")).toMatchSnapshot();
  });
});
