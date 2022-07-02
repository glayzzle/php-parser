// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug29493.phpt
  it("Bug #29493 (extract(EXTR_REFS) fails if array has multiple referrals)", function () {
    expect(parser.parseCode("<?php\nfunction t1()\n{\n    $a = array('foo' => 'aaa');\n    // refcount($a) = 1\n    // refcount($a['foo']) = 1\n    $b = $a;\n    // refcount($a) = 2\n    // refcount($a['foo']) = 1\n    $b['foo'] = 'bbb';\n    // refcount($a) = 1\n    // refcount($a['foo']) = 1\n    var_dump($a, $b);\n    extract($a, EXTR_REFS);\n    $foo = 'noo';\n    var_dump($a, $b);\n}\nfunction t2()\n{\n    $a = array('foo' => 'aaa');\n    // refcount($a) = 1\n    // refcount($a['foo']) = 1\n    $b = &$a;\n    // refcount($a) = 2\n    // is_ref($a) = true\n    // refcount($a['foo']) = 1\n    $b['foo'] = 'bbb';\n    // refcount($a) = 2\n    // refcount($a['foo']) = 1\n    var_dump($a, $b);\n    extract($a, EXTR_REFS);\n    $foo = 'noo';\n    var_dump($a, $b);\n}\nfunction t3()\n{\n    $a = array('foo' => 'aaa');\n    // refcount($a) = 1\n    // refcount($a['foo']) = 1\n    $b = &$a;\n    // refcount($a) = 2\n    // is_ref($a) = true\n    // refcount($a['foo']) = 1\n    unset($b);\n    // refcount($a) = 1\n    // is_ref($a) = true\n    // refcount($a['foo']) = 1\n    var_dump($a);\n    extract($a, EXTR_REFS);\n    $foo = 'noo';\n    var_dump($a);\n}\nt1();\nt2();\nt3();\n?>")).toMatchSnapshot();
  });
});
