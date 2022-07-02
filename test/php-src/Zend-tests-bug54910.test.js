// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54910.phpt
  it("Bug #54910 (Crash when calling call_user_func with unknown function name)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __call($method, $args) {\n        if (stripos($method, 'get') === 0) {\n            return $this->get();\n        }\n        die(\"No such method - '$method'\\n\");\n    }\n    protected function get() {\n        $class = get_class($this);\n        $call = array($class, 'noSuchMethod');\n        if (is_callable($call)) {\n            call_user_func($call);\n        }\n    }\n}\nclass B extends A {}\n$input = new B();\necho $input->getEmail();\n?>")).toMatchSnapshot();
  });
});
