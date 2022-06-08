// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/compare_objects_basic1.phpt
  it("Test standard 'compare' object handler", function () {
    expect(parser.parseCode("<?php\necho \"Simple test for standard compare object handler\\n\";\nclass class1{}\nclass class2{}\nclass class3{\n    public $aaa;\n    private $bbb;\n    protected $ccc;\n}\nclass class4 extends class3{\n}\nclass class5 extends class3{\n    public $ddd;\n    private $eee;\n}\n// Define a bunch of objects all of which will use standard compare object handler\n$obj1 = new class1();\n$obj2 = new class2();\n$obj3 = new class3();\n$obj4 = new class4();\n$obj5 = new class5();\necho \"\\n-- The following compare should return TRUE --\\n\";\nvar_dump($obj1 == $obj1);\necho \"\\n-- All the following compares should return FALSE --\\n\";\nvar_dump($obj1 == $obj2);\nvar_dump($obj1 == $obj3);\nvar_dump($obj1 == $obj4);\nvar_dump($obj1 == $obj5);\nvar_dump($obj4 == $obj3);\nvar_dump($obj5 == $obj3);\n?>")).toMatchSnapshot();
  });
});
