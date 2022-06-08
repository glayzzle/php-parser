// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/mixed_return_type.phpt
  it("Everything is trivially a subtype of mixed", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    echo \"Loading $class\\n\";\n});\nclass A {\n    public function test(): mixed {}\n}\nclass B extends A {\n    public function test(): X {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
