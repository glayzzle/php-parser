// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug31213.phpt
  it("Bug #31213 (Sideeffects caused by bug #29493)", function () {
    expect(parser.parseCode("<?php\nfunction test($use_extract) {\n    $a = 1;\n    $b = 1;\n    $arr = array(\n        '_a' => $a,\n        '_b' => &$b\n    );\n    var_dump($a, $b);\n    if ($use_extract) {\n        extract($arr, EXTR_REFS);\n    } else {\n        $_a = &$arr['_a'];\n        $_b = &$arr['_b'];\n    }\n    $_a++;\n    $_b++;\n    var_dump($a, $b, $_a, $_b, $arr);\n}\ntest(false);\ntest(true);\n?>")).toMatchSnapshot();
  });
});
