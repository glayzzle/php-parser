// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_obj_ref_return.phpt
  it("ASSIGN_OBJ should not return reference", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->ref =& $ref;\n$obj->val = $obj->ref = 42;\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
