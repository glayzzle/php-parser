// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_name_as_scalar_error_003.phpt
  it("class name as scalar from ::class keyword error using static in method signature", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar {\n    class One {\n        public function baz($x = static::class) {}\n    }\n}\n?>")).toMatchSnapshot();
  });
});
