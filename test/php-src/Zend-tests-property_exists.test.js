// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/property_exists.phpt
  it("Testing property_exists()", function () {
    expect(parser.parseCode("<?php\nclass aParent {\n    public static function staticTest() {\n        $a = new A;\n        var_dump(property_exists($a, \"prot\"));\n        var_dump(property_exists($a, \"prot2\"));\n        var_dump(property_exists($a, \"prot3\"));\n        print \"------------------\\n\";\n        var_dump(property_exists(\"A\", \"prot\"));\n        var_dump(property_exists(\"A\", \"prot2\"));\n        var_dump(property_exists(\"A\", \"prot3\"));\n        print \"------------------\\n\";\n    }\n    public function nonstaticTest() {\n        $a = new A;\n        var_dump(property_exists($a, \"prot\"));\n        var_dump(property_exists($a, \"prot2\"));\n        var_dump(property_exists($a, \"prot3\"));\n        print \"------------------\\n\";\n        var_dump(property_exists(\"A\", \"prot\"));\n        var_dump(property_exists(\"A\", \"prot2\"));\n        var_dump(property_exists(\"A\", \"prot3\"));\n    }\n}\nclass A extends aParent {\n    static public $prot = \"prot\";\n    static protected $prot2 = \"prot\";\n    static private $prot3 = \"prot\";\n}\nA::staticTest();\n$a = new a;\n$a->nonstaticTest();\n?>")).toMatchSnapshot();
  });
});
