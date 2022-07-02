// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/validation/mixed_property_strict_success.phpt
  it("Test that the mixed property type accepts any kind of value in strict mode", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nclass Foo\n{\n    public mixed $property1;\n    public mixed $property2 = null;\n    public mixed $property3 = false;\n    public mixed $property4 = true;\n    public mixed $property5 = 1;\n    public mixed $property6 = 3.14;\n    public mixed $property7 = \"foo\";\n    public mixed $property8 = [];\n    public mixed $property9;\n    public function __construct()\n    {\n        $this->property9 = fopen(__FILE__, \"r\");\n        $this->property9 = new stdClass();\n    }\n}\n$foo = new Foo();\ntry {\n    $foo->property1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
