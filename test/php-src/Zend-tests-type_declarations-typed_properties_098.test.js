// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_098.phpt
  it("Make sure uninitialized property is initialized to null when taken by reference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n}\n$test = new Test;\nunset($test->prop);\n$ref =& $test->prop;\nvar_dump($ref);\n?>")).toMatchSnapshot();
  });
});
