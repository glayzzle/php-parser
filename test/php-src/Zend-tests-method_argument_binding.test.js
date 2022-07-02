// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/method_argument_binding.phpt
  it("Edge cases in compile-time method argument binding", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function method($x) {}\n}\nclass B extends A {\n    public function test() {\n        $x = 1;\n        $this->method($x);\n        var_dump($x);\n    }\n}\nclass C extends B {\n    public function method(&$x) {\n        ++$x;\n    }\n}\n(new C)->test();\nclass D {\n    private function method(&$x) {\n        ++$x;\n    }\n}\nclass E extends D {\n    public function __call($name, $args) { }\n    public function test() {\n        $this->method($x);\n    }\n}\n(new E)->test();\n?>")).toMatchSnapshot();
  });
});
