// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_op_002.phpt
  it("JIT ASSIGN_OBJ_OP: memory leak", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public string $prop = \"222\";\n}\nclass B {\n    public function __toString() {\n        global $a;\n        $a->prop .=  $a->prop . \"leak\";\n        return \"test\";\n    }\n}\n$a = new A;\n$prop = &$a->prop;\n$a->prop = new B;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
