// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/union_nullable_property_fails.phpt
  it("Nullable default property error message", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public string|int $b = null;\n}\n$t = new A;\n$t->b;\n?>")).toMatchSnapshot();
  });
});
