// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60809.phpt
  it("Bug #60809 (TRAITS - PHPDoc Comment Style Bug)", function () {
    expect(parser.parseCode("<?php\nclass ExampleParent {\n    private $hello_world = \"hello foo\\n\";\n    public function foo() {\n           echo $this->hello_world;\n    }\n}\nclass Example extends ExampleParent {\n    use ExampleTrait;\n}\ntrait ExampleTrait {\n    /**\n     *\n     */\n    private $hello_world = \"hello bar\\n\";\n    /**\n     *\n     */\n    public $prop = \"ops\";\n    public function bar() {\n        echo $this->hello_world;\n    }\n}\n$x = new Example();\n$x->foo();\n$x->bar();\n?>")).toMatchSnapshot();
  });
});
