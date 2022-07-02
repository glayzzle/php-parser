// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42937.phpt
  it("Bug #42937 (__call() method not invoked when methods are called on parent from child class)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __call($strMethod, $arrArgs) {\n        echo \"$strMethod\\n\";\n    }\n}\nclass C {\n    function __call($strMethod, $arrArgs) {\n        echo \"$strMethod\\n\";\n    }\n}\nclass B extends A {\n    function test() {\n        self::test1();\n        parent::test2();\n        static::test3();\n        A::test4();\n        B::test5();\n        C::test6();\n    }\n}\n$a = new A();\n$a->test();\n$b = new B();\n$b->test();\n?>")).toMatchSnapshot();
  });
});
