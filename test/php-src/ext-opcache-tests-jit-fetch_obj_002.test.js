// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_002.phpt
  it("JIT: FETCH_OBJ 002", function () {
    expect(parser.parseCode("<?php\nclass A {\n   public $x = 2;\n}\nclass B {\n   public $x = 3;\n   public function __get($name) {\n      var_dump(\"__get\");\n   }\n}\nfunction bar() {\n   $a = new A();\n   var_dump($a->x);\n   var_dump($a->y);\n   $b = new B();\n   var_dump($b->x);\n   unset($b->x);\n   $b->x;\n}\nbar();\n?>")).toMatchSnapshot();
  });
});
