// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68191.phpt
  it("Bug #68191: Broken reference across objects", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->prop1 = 'abc';\n$obj->prop2 =& $obj->prop1;\n$obj->prop2 .= 'xyz';\nvar_dump($obj->prop1);\n$obj->prop3 = 1;\n$obj->prop4 =& $obj->prop3;\n++$obj->prop4;\nvar_dump($obj->prop3);\n?>")).toMatchSnapshot();
  });
});
