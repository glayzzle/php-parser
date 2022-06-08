// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_058.phpt
  it("Closure 058: Closure scope and object", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() {\n        return function () {var_dump(get_class(),get_called_class());};\n    }\n    function bar() {\n        return function () {var_dump(get_class(),get_called_class(),$this);};\n    }\n}\n$z = \"call_user_func\";\n$a = A::foo();\n$a();\n$a->__invoke();\n$c = array($a,\"__invoke\");\n$c();\ncall_user_func(array($a,\"__invoke\"));\n$z(array($a,\"__invoke\"));\necho \"\\n\";\n$x = new A();\n$b = $x->bar();\n$b();\n$b->__invoke();\n$c = array($b,\"__invoke\");\n$c();\ncall_user_func(array($b,\"__invoke\"));\n$z(array($b,\"__invoke\"));\n?>")).toMatchSnapshot();
  });
});
