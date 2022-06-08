// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_007.phpt
  it("JIT: FETCH_OBJ 007", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public ?C $prop = null;\n}\nfunction foo($obj) {\n    $obj->prop->prop = null;\n}\n$obj = new C;\n$obj->prop = new C;\nfor ($i = 0; $i < 10; $i++) {\n    foo($obj);\n}\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
