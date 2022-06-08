// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_property_ref_incdec.phpt
  it("Inc/dec of reference object properties", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->cursor = 0;\n$ref =& $obj->cursor;\n$obj->cursor++;\nvar_dump($obj->cursor);\n$obj->cursor--;\nvar_dump($obj->cursor);\n?>")).toMatchSnapshot();
  });
});
