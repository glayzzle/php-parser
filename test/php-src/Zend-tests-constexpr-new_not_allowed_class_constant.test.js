// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_not_allowed_class_constant.phpt
  it("New not allowed in class constant", function () {
    expect(parser.parseCode("<?php\n// New in class constants (and static properties) brings up evaluation order questions: When\n// should the (potentially side-effecting) new expression be evaluated? Evaluating it when the\n// class is declared would break references to classes that are declared later in the same\n// file. On the other hand, the current lazy evaluation of initializers is somewhat ill-defined\n// when we start considering side-effecting expressions.\nclass Test {\n    const X = new stdClass;\n}\n?>")).toMatchSnapshot();
  });
});
