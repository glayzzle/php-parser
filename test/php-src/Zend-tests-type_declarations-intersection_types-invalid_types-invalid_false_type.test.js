// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_false_type.phpt
  it("false type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): false&Iterator {}\n?>")).toMatchSnapshot();
  });
});
