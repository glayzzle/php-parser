// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48770.phpt
  it("Bug #48770 (call_user_func_array() fails to call parent from inheriting class)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function func($arg) {\n        echo \"A::func called\\n\";\n    }\n}\nclass B extends A {\n    public function func($arg) {\n        echo \"B::func called\\n\";\n    }\n    public function callFuncInParent($arg) {\n        call_user_func_array(array($this, 'parent::func'), array($arg));\n    }\n}\nclass C extends B {\n    public function func($arg) {\n        echo \"C::func called\\n\";\n        parent::func($str);\n    }\n}\n$c = new C;\n$c->callFuncInParent('Which function will be called??');\n?>")).toMatchSnapshot();
  });
});
