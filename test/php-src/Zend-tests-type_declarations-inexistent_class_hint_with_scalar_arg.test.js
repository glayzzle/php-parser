// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/inexistent_class_hint_with_scalar_arg.phpt
  it("Inexistent class as type receiving scalar argument", function () {
    expect(parser.parseCode("<?php\nfunction foo(bar $ex) {}\nfoo(null);\n?>")).toMatchSnapshot();
  });
});
