// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78015.phpt
  it("Bug #78015: Incorrect evaluation of expressions involving partials array in SCCP", function () {
    expect(parser.parseCode("<?php\n$x = 1;\nfunction test1() {\n    global $x;\n    $a = ['b' => [$x], 'c' => [$x]];\n    $d = $a['b'] + $a['c'];\n    return $d;\n}\nfunction test2() {\n    global $x;\n    $a = ['b' => [$x]];\n    $d = !$a['b'];\n    return $d;\n}\nfunction test3() {\n    global $x;\n    $a = ['b' => [$x]];\n    $d = (int) $a['b'];\n    return $d;\n}\nfunction test4() {\n    global $x;\n    $a = ['b' => [$x]];\n    $d = $a['b'] ?: 42;\n    return $d;\n}\nfunction test5() {\n    global $x;\n    $a = ['b' => [$x]];\n    $d = is_array($a['b']);\n    return $d;\n}\nfunction test6() {\n    global $x;\n    $a = ['b' => [$x]];\n    $b = \"foo\";\n    $d = \"$a[b]{$b}bar\";\n    return $d;\n}\nfunction test7() {\n    global $x;\n    $a = ['b' => [$x]];\n    $y = 1;\n    foreach ($a['b'] as $_) {\n        $y = 2;\n    }\n    return $y;\n}\nfunction test8($array) {\n    $i = 0;\n    $ret = [[]];\n    foreach ($array as $_) {\n      $i++;\n      $ret = [[\n        'x' => 0,\n        'y' => $i,\n      ]];\n    }\n    return $ret[0];\n}\nfunction test9() {\n    global $x;\n    $a = ['b' => [$x]];\n    return serialize($a['b']);\n}\nvar_dump(test1());\nvar_dump(test2());\nvar_dump(test3());\nvar_dump(test4());\nvar_dump(test5());\nvar_dump(test6());\nvar_dump(test7());\nvar_dump(test8([1]));\nvar_dump(test9());\n?>")).toMatchSnapshot();
  });
});
