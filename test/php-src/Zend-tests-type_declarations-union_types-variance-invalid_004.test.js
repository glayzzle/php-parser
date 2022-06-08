// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/variance/invalid_004.phpt
  it("Invalid property inheritance where one direction is valid and the other unresolved", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public X|B $prop;\n}\nclass B extends A {\n    public B $prop;\n}\n?>")).toMatchSnapshot();
  });
});
