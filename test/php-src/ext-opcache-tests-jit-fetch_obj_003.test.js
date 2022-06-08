// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_003.phpt
  it("JIT: FETCH_OBJ 003", function () {
    expect(parser.parseCode("<?php\nclass C {\n    var $a = 0;\n}\nfunction foo() {\n    $x = new C;\n    $x->a = 1;\n    unset($x->a);\n    $x->a += 2;\n    var_dump($x);\n}\nfunction bar() {\n    $x = new C;\n    $x->a = 1;\n    $x->b = 2;\n    unset($x->a);\n    $x->a += 2;\n    var_dump($x);\n}\nfoo();\nbar();\n?>")).toMatchSnapshot();
  });
});
