// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/overloaded_assign_prop_return_value.phpt
  it("Make sure the return value of a property assignment is not freed to early", function () {
    expect(parser.parseCode("<?php\nclass Overloaded {\n    function __set($r, $a) {}\n}\n$obj = new Overloaded;\n$x = $obj->prop = new stdClass;\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
