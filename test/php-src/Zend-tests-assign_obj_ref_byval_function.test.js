// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_obj_ref_byval_function.phpt
  it("Assign result of by-value function to object property by-reference", function () {
    expect(parser.parseCode("<?php\nfunction notRef() {\n    return null;\n}\n$obj = new stdClass;\n$obj->prop =& notRef();\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
