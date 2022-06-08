// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_object_type.phpt
  it("object type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): object&Iterator {}\n?>")).toMatchSnapshot();
  });
});
