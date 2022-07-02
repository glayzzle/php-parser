// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_011.phpt
  it("__call() for private/protected methods", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private   $var1 = 'var1 value';\n    protected $var2 = 'var2 value';\n    private function func1()\n    {\n        return \"in func1\";\n    }\n    protected function func2()\n    {\n        return \"in func2\";\n    }\n    public function __get($var)\n    {\n        return $this->$var;\n    }\n    public function __call($func, array $args = array())\n    {\n        return call_user_func_array(array($this, $func), $args);\n    }\n}\n$a = new A();\necho $a->var1,\"\\n\";\necho $a->var2,\"\\n\";\necho $a->func1(),\"\\n\";\necho $a->func2(),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
