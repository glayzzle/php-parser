// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid_invariance1.phpt
  it("Property types must be invariant", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\nclass A {\n    public X&Y $prop;\n}\nclass B extends A {\n    public X&Y&Z $prop;\n}\n?>")).toMatchSnapshot();
  });
});
