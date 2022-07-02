// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_033.phpt
  it("Ensure object comparison property order remains consistent", function () {
    expect(parser.parseCode("<?php\n// PHP4-5.3 object semantics had child properties added to an\n// object HashTable first, then parent, then grandparent, etc...\n// As of PHP 5.4 we use a packed C array to hold properties\n// which may or may not share the same ordering.\n// In the code snippet below, the print_r() has the side-effect\n// of materializing the properties shadow HashTable which\n// if used for comparison, results in the behavior consistent\n// with pre PHP-5.4.\n// This test ensures that the first comparison yields the same\n// result without shadow table materialization.\nclass A { public $a; }\nclass B extends A { public $b; }\n$a = new B(); $a->a = 0; $a->b = 1;\n$b = new B(); $b->a = 1; $b->b = 0;\nvar_dump($a < $b);\nprint_r($a, true);\nvar_dump($a < $b);\n?>")).toMatchSnapshot();
  });
});
