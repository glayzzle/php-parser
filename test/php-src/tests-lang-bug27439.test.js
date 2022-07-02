// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug27439.phpt
  it("Bug #27439 (foreach() with $this segfaults)", function () {
    expect(parser.parseCode("<?php\nclass test_props {\n    public $a = 1;\n    public $b = 2;\n    public $c = 3;\n}\nclass test {\n    public $array = array(1,2,3);\n    public $string = \"string\";\n    public function __construct() {\n        $this->object = new test_props;\n    }\n    public function getArray() {\n        return $this->array;\n    }\n    public function getString() {\n        return $this->string;\n    }\n    public function case1() {\n        foreach ($this->array as $foo) {\n            echo $foo;\n        }\n    }\n    public function case2() {\n        foreach ($this->foobar as $foo);\n    }\n    public function case3() {\n        foreach ($this->string as $foo);\n    }\n    public function case4() {\n        foreach ($this->getArray() as $foo);\n    }\n    public function case5() {\n        foreach ($this->getString() as $foo);\n    }\n    public function case6() {\n        foreach ($this->object as $foo) {\n            echo $foo;\n        }\n    }\n}\n$test = new test();\n$test->case1();\n$test->case2();\n$test->case3();\n$test->case4();\n$test->case5();\n$test->case6();\necho \"\\n\";\necho \"===DONE===\";\n?>")).toMatchSnapshot();
  });
});
