// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_dynamic_class_name.phpt
  it("Dynamic class name in new is not supported", function () {
    expect(parser.parseCode("<?php\nstatic $x = new (FOO);\n?>")).toMatchSnapshot();
  });
});
