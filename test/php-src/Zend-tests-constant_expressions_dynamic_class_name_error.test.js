// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_dynamic_class_name_error.phpt
  it("Dynamic class names can't be used in compile-time constant refs", function () {
    expect(parser.parseCode("<?php\n$foo = 'test';\nconst C = $foo::BAR;\n?>")).toMatchSnapshot();
  });
});
