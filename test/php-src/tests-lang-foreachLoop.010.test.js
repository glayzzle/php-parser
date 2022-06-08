// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.010.phpt
  it("This test illustrates the impact of invoking destructors when refcount is decremented to 0 on foreach.\nIt will pass only if the 'contentious code' in PHPValue.decReferences() is enabled.", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$container = array(&$a);\n// From php.net:\n//   \"Unless the array is referenced, foreach operates on a copy of\n//    the specified array and not the array itself.\"\n// At this point, the array $a is referenced.\n// The following line ensures $a is no longer references as a consequence\n// of running the 'destructor' on $container.\n$container = null;\n// At this point the array $a is no longer referenced, so foreach should operate on a copy of the array.\n// However, P8 does not invoke 'destructors' when refcount is decremented to 0.\n// Consequently, $a thinks it is still referenced, and foreach will operate on the array itself.\n// This provokes a difference in behaviour when changing the number of elements in the array while\n// iterating over it.\n$i=0;\nforeach ($a as $v) {\n    array_push($a, 'new');\n    var_dump($v);\n    if (++$i>10) {\n        echo \"Infinite loop detected\\n\";\n        break;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
