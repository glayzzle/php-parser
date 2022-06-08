// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/optimize_func_calls.phpt
  it("Test with optimization of function calls", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $obj;\n    public function test($a) {\n    }\n}\nfunction a(&$b) {\n    $b = \"changed\";\n    return \"done\";\n}\n$a = \"a\";\n$b = \"b\";\n$c = \"c\";\n$f = \"a\";\n/*\n * INIT_FCALL_BY_NAME\n * SEND_VAR\n * DO_FCALL\n * DO_FCALL_BY_NAME\n */\nfoo(a($a));\nvar_dump($a);\n$a = \"a\";\n/*\n * INIT_FCALL_BY_NAME\n *   INIT_FCALL_BY_NAME -- un-optimizable\n *   DO_FCALL_BY_NAME   -- un-optimizable\n * DO_FCALL_BY_NAME\n */\nfoo($f($a));\nvar_dump($a);\n/*\n * INIT_FCALL_BY_NAME\n *   ZEND_NEW\n *   DO_FCALL_BY_NAME\n * DO_FCALL_BY_NAME\n */\nfoo(new A());\n/*\n * INIT_FCALL_BY_NAME\n * FETCH_OBJ_FUNC_ARG\n * ZEND_SEND_VAR\n * DO_FCALL_BY_NAME\n */\nfoo((new A)->obj);\n$obj = new A;\nref($obj->obj);\nvar_dump($obj->obj);\nref(retarray()[0]);\n$a = \"a\";\nfoo(a($a), $a, ref($b, $c), $obj);\nvar_dump($a);\nvar_dump($b);\n/*\n * INIT_FCALL_BY_NAME\n * SEND_VAL\n * DO_FCALL_BY_NAME\n */\nref(\"xxx\");\nfunction retarray() {\n    return array(\"retarray\");\n}\nfunction foo($a) {\n    print_r(func_get_args());\n}\nfunction ref(&$b) {\n    $b = \"changed\";\n    return \"ref\";\n}\n?>")).toMatchSnapshot();
  });
});
