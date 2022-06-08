// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_null_type.phpt
  it("null type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): null&Iterator {}\n?>")).toMatchSnapshot();
  });
});
