// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_protected_inheritance_mismatch.phpt
  it("Typed property invariance violation for protected properties", function () {
    expect(parser.parseCode("<?php\nclass A { protected int $x; }\nclass B extends A { protected $x; }\n?>")).toMatchSnapshot();
  });
});
