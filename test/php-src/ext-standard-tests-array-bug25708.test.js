// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug25708.phpt
  it("Bug #25708 (extract($GLOBALS, EXTR_REFS) mangles $GLOBALS)", function () {
    expect(parser.parseCode("<?php\nfunction foo($ref, $alt) {\n    unset($GLOBALS['a']);\n    unset($GLOBALS['b']);\n    $GLOBALS['a'] = 1;\n    $GLOBALS['b'] = 2;\n    $org_a = $GLOBALS['a'];\n    $org_b = $GLOBALS['b'];\n    if ($ref) {\n        global $a, $b;\n    } else {\n        /* zval temp_var(NULL); // refcount = 1\n         * a = temp_var[x] // refcount = 2\n         */\n        $a = NULL;\n        $b = NULL;\n    }\n    var_dump($a, $b, $GLOBALS['a'], $GLOBALS['b']);\n    echo \"--\\n\";\n    if ($alt) {\n        $a = &$GLOBALS['a'];\n        $b = &$GLOBALS['b'];\n    } else {\n        extract($GLOBALS, EXTR_REFS);\n    }\n    var_dump($a, $b, $GLOBALS['a'], $GLOBALS['b']);\n    echo \"--\\n\";\n    $a = &$GLOBALS['a'];\n    $b = &$GLOBALS['b'];\n    var_dump($a, $b, $GLOBALS['a'], $GLOBALS['b']);\n    echo \"--\\n\";\n    $GLOBALS['b'] = 3;\n    var_dump($a, $b, $GLOBALS['a'], $GLOBALS['b']);\n    echo \"--\\n\";\n    $a = 4;\n    var_dump($a, $b, $GLOBALS['a'], $GLOBALS['b']);\n    echo \"--\\n\";\n    $c = $b;\n    var_dump($b, $GLOBALS['b'], $c);\n    echo \"--\\n\";\n    $b = 'x';\n    var_dump($a, $b, $GLOBALS['a'], $GLOBALS['b'], $c);\n    echo \"--\\n\";\n    var_dump($org_a, $org_b);\n    echo \"----\";\n    if ($ref) echo 'r';\n    if ($alt) echo 'a';\n    echo \"\\n\";\n}\n$a = 'ok';\n$b = 'ok';\n$_a = $a;\n$_b = $b;\nfoo(false, true);\nfoo(true, true);\nfoo(false, false);\nfoo(true, false);\nvar_dump($_a, $_b);\n?>")).toMatchSnapshot();
  });
});
