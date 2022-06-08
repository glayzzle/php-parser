// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_object_vars_basic_001.phpt
  it("get_object_vars(): visibility from static methods (target object passed as arg)", function () {
    expect(parser.parseCode("<?php\nClass A {\n    private $hiddenPriv = 'A::hiddenPriv';\n    public static function test($b) {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($b));\n    }\n}\nClass B extends A {\n    private $hiddenPriv = 'B::hiddenPriv';\n    private $priv = 'B::priv';\n    protected $prot = 'B::prot';\n    public $pub = 'B::pub';\n    public static function test($b) {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($b));\n    }\n}\nClass C extends B {\n    private $hiddenPriv = 'C::hiddenPriv';\n    public static function test($b) {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($b));\n    }\n}\nClass X {\n    public static function test($b) {\n        echo __METHOD__ . \"\\n\";\n        var_dump(get_object_vars($b));\n    }\n}\n$b = new B;\necho \"\\n---( Global scope: )---\\n\";\nvar_dump(get_object_vars($b));\necho \"\\n---( Declaring class: )---\\n\";\nB::test($b);\necho \"\\n---( Subclass: )---\\n\";\nC::test($b);\necho \"\\n---( Superclass: )---\\n\";\nA::test($b);\necho \"\\n---( Unrelated class: )---\\n\";\nX::test($b);\n?>")).toMatchSnapshot();
  });
});
