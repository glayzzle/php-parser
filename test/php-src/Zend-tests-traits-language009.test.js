// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language009.phpt
  it("In instead definitions all trait whose methods are meant to be hidden can be listed.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait A {\n   public function foo() {\n     echo 'a';\n   }\n}\ntrait B {\n   public function foo() {\n     echo 'b';\n   }\n}\ntrait C {\n   public function foo() {\n     echo 'c';\n   }\n}\nclass MyClass {\n    use C, A, B {\n        B::foo insteadof A, C;\n    }\n}\n$t = new MyClass;\n$t->foo();\n?>")).toMatchSnapshot();
  });
});
