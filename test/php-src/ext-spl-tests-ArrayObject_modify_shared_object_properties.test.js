// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_modify_shared_object_properties.phpt
  it("Modifications to ArrayObjects should not affect shared properties tables", function () {
    expect(parser.parseCode("<?php\n$obj = (object)['a' => 1, 'b' => 2];\n$ao = new ArrayObject($obj);\n$arr = (array) $obj;\n$ao['a'] = 42;\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
