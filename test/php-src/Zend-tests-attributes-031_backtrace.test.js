// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/031_backtrace.phpt
  it("Backtrace during attribute instance creation", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass MyAttribute {\n    public function __construct() {\n        debug_print_backtrace();\n        var_dump(debug_backtrace());\n        var_dump((new Exception)->getTrace());\n    }\n}\n#[MyAttribute]\nclass Test {}\n(new ReflectionClass(Test::class))->getAttributes()[0]->newInstance();\n?>")).toMatchSnapshot();
  });
});
