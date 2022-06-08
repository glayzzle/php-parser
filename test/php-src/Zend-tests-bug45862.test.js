// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45862.phpt
  it("Bug #45862 (get_class_vars is inconsistent with 'protected' and 'private' variables)", function () {
    expect(parser.parseCode("<?php\nclass Ancestor {\n  function test() {\n    var_dump(get_class_vars(\"Tester\"));\n    var_dump(Tester::$prot);\n  }\n}\nclass Tester extends Ancestor {\n  static protected $prot = \"protected var\";\n  static private $priv = \"private var\";\n}\nclass Child extends Tester {\n  function test() { var_dump(get_class_vars(\"Tester\")); }\n}\necho \"\\n From parent scope\\n\";\n$parent = new Ancestor();\n$parent->test();\necho \"\\n From child scope\\n\";\n$child = new Child();\n$child->test();\n?>")).toMatchSnapshot();
  });
});
