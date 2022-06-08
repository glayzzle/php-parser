// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_001.phpt
  it("JIT: FETCH_OBJ", function () {
    expect(parser.parseCode("<?php\nfunction foo(&$a) {\n    $a = 2;\n}\nfunction foo2(&$a) {\n    $a = array();\n}\nfunction foo3(&$a, $var) {\n    $a = $var;\n}\n$obj = new stdClass;\nfoo($obj->a);\nvar_dump($obj);\nfoo2($obj->b);\nvar_dump($obj);\nfoo3($obj->a, \"2\" . \"3\");\nfoo3($obj->a, $obj->b);\nvar_dump($obj);\n$a = &$obj->a;\n$a = fopen(__FILE__, \"r\");\nvar_dump($obj);\nfunction bar() {\n    $obj = new stdClass;\n    foo($obj->a);\n    var_dump($obj);\n    foo2($obj->b);\n    var_dump($obj);\n    foo3($obj->a, \"2\" . \"3\");\n    foo3($obj->a, $obj->b);\n    var_dump($obj);\n    $a = &$obj->a;\n    $a = fopen(__FILE__, \"r\");\n    var_dump($obj);\n    $d = array();\n    try {\n        foo($d->{\"ab\" .\"c\"});\n    } catch (Error $err) {\n        echo $err->getMessage(), \"\\n\";\n    }\n    var_dump($d);\n    $e = NULL;\n    try {\n        foo($e->{\"ab\" .\"c\"});\n    } catch (Error $err) {\n        echo $err->getMessage(), \"\\n\";\n    }\n    var_dump($e);\n    $f = \"\";\n    try {\n        foo($f->{\"ab\" .\"c\"});\n    } catch (Error $err) {\n        echo $err->getMessage(), \"\\n\";\n    }\n    var_dump($f);\n}\nbar();\n?>")).toMatchSnapshot();
  });
});
