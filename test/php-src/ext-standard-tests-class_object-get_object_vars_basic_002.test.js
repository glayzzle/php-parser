// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_object_vars_basic_002.phpt
  it("get_object_vars(): visibility from non static methods (target object passed as arg)", function () {
    expect(parser.parseCode("<?php\nClass A {\n    private $hiddenPriv = 'A::hiddenPriv';\n    public function testA($b) {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($b));\n    }\n}\nClass B extends A {\n    private $hiddenPriv = 'B::hiddenPriv';\n    private $priv = 'B::priv';\n    protected $prot = 'B::prot';\n    public $pub = 'B::pub';\n    public function testB($b) {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($b));\n    }\n}\n$b = new B;\necho \"\\n---( Declaring class: )---\\n\";\n$b->testB($b);\necho \"\\n---( Superclass: )---\\n\";\n$b->testA($b);\n?>")).toMatchSnapshot();
  });
});
