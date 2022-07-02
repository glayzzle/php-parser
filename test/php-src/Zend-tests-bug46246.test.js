// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46246.phpt
  it("Bug #46246 (difference between call_user_func(array($this, $method)) and $this->$method())", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    private function Test()\n    {\n        echo 'Hello from '.get_class($this).\"\\n\";\n    }\n    public function call($method, $args = array())\n    {\n        $this->Test();\n        $this->$method();\n        call_user_func(array($this, $method));\n    }\n}\nclass B extends A\n{\n    protected function Test()\n    {\n        echo 'Overridden hello from '.get_class($this).\"\\n\";\n    }\n}\n$a = new A;\n$b = new B;\n$a->call('Test');\n$b->call('Test');\n?>")).toMatchSnapshot();
  });
});
