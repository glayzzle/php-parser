// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/incdec_ref_property.phpt
  it("Incrementing and decrementing a referenced property", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->prop = 1;\n$ref =& $obj->prop;\nvar_dump(++$obj->prop);\nvar_dump($obj->prop);\nvar_dump($obj->prop++);\nvar_dump($obj->prop);\nvar_dump(--$obj->prop);\nvar_dump($obj->prop);\nvar_dump($obj->prop--);\nvar_dump($obj->prop);\n?>")).toMatchSnapshot();
  });
});
