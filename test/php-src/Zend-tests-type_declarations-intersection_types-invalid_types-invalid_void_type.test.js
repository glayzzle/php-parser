// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_void_type.phpt
  it("void type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): void&Iterator {}\n?>")).toMatchSnapshot();
  });
});
