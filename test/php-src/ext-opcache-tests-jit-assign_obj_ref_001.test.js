// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_ref_001.phpt
  it("JIT ASSIGN_OBJ_REF: 001", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $obj = new stdClass;\n    $obj->prop =& $obj;\n    var_dump($obj->prop);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
