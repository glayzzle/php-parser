// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/return_type_in_function.phpt
  it("Adding a function object return type", function () {
    expect(parser.parseCode("<?php\nfunction a() : object {\n    return 12345;\n}\na();\n?>")).toMatchSnapshot();
  });
});
