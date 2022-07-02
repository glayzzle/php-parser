// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/static_type_property.phpt
  it("Static type is not allowed in properties", function () {
    expect(() => parser.parseCode("<?php\n// Testing ?static here, to avoid ambiguity with static properties.\nclass Test {\n    public ?static $foo;\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
