// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/002_rfcexample.phpt
  it("Attributes: Example from Attributes RFC", function () {
    expect(parser.parseCode("<?php\n// https://wiki.php.net/rfc/attributes_v2#attribute_syntax\nnamespace My\\Attributes {\n    use Attribute;\n    #[Attribute]\n    class SingleArgument {\n        public $argumentValue;\n        public function __construct($argumentValue) {\n             $this->argumentValue = $argumentValue;\n        }\n    }\n}\nnamespace {\n    use My\\Attributes\\SingleArgument;\n    #[SingleArgument(\"Hello World\")]\n    class Foo {\n    }\n    $reflectionClass = new \\ReflectionClass(Foo::class);\n    $attributes = $reflectionClass->getAttributes();\n    var_dump($attributes[0]->getName());\n    var_dump($attributes[0]->getArguments());\n    var_dump($attributes[0]->newInstance());\n}\n?>")).toMatchSnapshot();
  });
});
