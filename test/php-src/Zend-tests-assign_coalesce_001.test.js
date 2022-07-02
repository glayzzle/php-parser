// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_001.phpt
  it("Coalesce assign (??=): Basic behavior", function () {
    expect(parser.parseCode("<?php\n// Refcounted values\n$foo = \"fo\";\n$foo .= \"o\";\n$bar = \"ba\";\n$bar .= \"r\";\n// Identity function used to track single-evaluation\nfunction id($arg) {\n    echo \"id($arg)\\n\";\n    return $arg;\n}\necho \"Simple variables:\\n\";\n$a = 123;\n$a ??= 456;\nvar_dump($a);\n$b = null;\n$b ??= $foo;\nvar_dump($b);\n$c = $foo;\n$c ??= $bar;\nvar_dump($c);\n$d ??= $foo;\nvar_dump($c);\necho \"\\nArrays:\\n\";\n$ary = [];\n$ary[\"foo\"] ??= 123;\n$ary[$foo] ??= $bar;\n$ary[$bar] ??= $foo;\nvar_dump($ary);\n$ary = [];\n$ary[id($foo)] ??= 123;\n$ary[id($foo)] ??= $bar;\n$ary[id($bar)] ??= $foo;\nvar_dump($ary);\necho \"\\nObjects:\\n\";\n$obj = new stdClass;\n$obj->foo ??= 123;\n$obj->$foo ??= $bar;\n$obj->$bar ??= $foo;\nvar_dump($obj);\n$obj = new stdClass;\n$obj->{id($foo)} ??= 123;\n$obj->{id($foo)} ??= $bar;\n$obj->{id($bar)} ??= $foo;\nvar_dump($obj);\nclass Test {\n    public static $foo;\n    public static $bar;\n}\necho \"\\nStatic props:\\n\";\nTest::$foo ??= 123;\nTest::$$foo ??= $bar;\nTest::$$bar ??= $foo;\nvar_dump(Test::$foo, Test::$bar);\nTest::$foo = null;\nTest::$bar = null;\nTest::${id($foo)} ??= 123;\nTest::${id($foo)} ??= $bar;\nTest::${id($bar)} ??= $foo;\nvar_dump(Test::$foo, Test::$bar);\n?>")).toMatchSnapshot();
  });
});
