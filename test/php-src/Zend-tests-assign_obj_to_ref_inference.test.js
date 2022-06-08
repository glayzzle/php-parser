// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_obj_to_ref_inference.phpt
  it("Assigning an object of known type to a reference variable", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $x = 42;\n}\nfunction test1() {\n    $r =& $o;\n    $o = new Test;\n    $r = new stdClass;\n    $r->x = 3.141;\n    var_dump(is_float($o->x));\n}\nfunction test2($o) {\n    $r =& $o;\n    if ($o instanceof Test) {\n        $r = new stdClass;\n        $r->x = 3.141;\n        var_dump(is_float($o->x));\n    }\n}\nfunction test3(Test &$o) {\n    $GLOBALS['r'] = new stdClass;\n    $GLOBALS['r']->x = 3.141;\n    var_dump(is_float($o->x));\n}\ntest1();\ntest2(new Test);\n$r = new Test;\ntest3($r);\n?>")).toMatchSnapshot();
  });
});
