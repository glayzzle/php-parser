// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug72229.phpt
  it("Bug #72229 (Wrong reference when serialize/unserialize an object)", function () {
    expect(parser.parseCode("<?php\nclass C1\n{\n    public $arr1 = array();\n    public $arr2 = array();\n    public function __construct()\n    {\n        $this->arr1[0] = $this;\n        $this->arr2[0] = $this->arr1[0];\n        $var1 = &$this->arr1[0];  // Set a reference...\n        unset($var1);             // ... and unset it.\n    }\n}\n$Obj1 = new C1();\n$txt1 = serialize($Obj1);\n$Obj2 = unserialize($txt1);\n$Obj1->arr2[0] = 50;\nprint_r($Obj1);\n$Obj2->arr2[0] = 50;\nprint_r($Obj2);\n?>")).toMatchSnapshot();
  });
});
