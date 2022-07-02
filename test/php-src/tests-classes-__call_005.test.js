// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__call_005.phpt
  it("When __call() is invoked via ::, ensure private implementation of __call() in superclass is accessed without error.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function __call($strMethod, $arrArgs) {\n        echo \"In \" . __METHOD__ . \"($strMethod, array(\" . implode(',',$arrArgs) . \"))\\n\";\n        var_dump($this);\n    }\n}\nclass B extends A {\n    function test() {\n        A::test1(1,'a');\n        B::test2(1,'a');\n        self::test3(1,'a');\n        parent::test4(1,'a');\n    }\n}\n$b = new B();\n$b->test();\n?>")).toMatchSnapshot();
  });
});
