// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_name_as_scalar_error_002.phpt
  it("class name as scalar from ::class keyword error using parent in class constant", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar {\n    class One {\n        const Baz = parent::class;\n    }\n    var_dump(One::Baz);\n}\n?>")).toMatchSnapshot();
  });
});
