// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_mixed_type.phpt
  it("mixed type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): mixed&Iterator {}\n?>")).toMatchSnapshot();
  });
});
