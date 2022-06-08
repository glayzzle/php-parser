// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_prop_name_leak.phpt
  it("Dynamic prop name with type conversion in reference position should not leak", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$name = 0.0;\n$ref =& $obj->$name;\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
