// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_obj_op_cache_slot.phpt
  it("The ASSIGN_OBJ_OP cache slot is on the OP_DATA opcode", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    $b = \"x\";\n    $a->$b = 1;\n    $a->$b &= 1;\n    var_dump($a->$b);\n}\ntest(new stdClass);\n?>")).toMatchSnapshot();
  });
});
