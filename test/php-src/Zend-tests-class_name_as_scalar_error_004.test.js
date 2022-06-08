// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_name_as_scalar_error_004.phpt
  it("class name as scalar from ::class keyword error using parent in method signature", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar {\n    class One {}\n    class Two extends One {\n        public function baz($x = parent::class) {\n            var_dump($x);\n        }\n    }\n    (new Two)->baz();\n}\n?>")).toMatchSnapshot();
  });
});
