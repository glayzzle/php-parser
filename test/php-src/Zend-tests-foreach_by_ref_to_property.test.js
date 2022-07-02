// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_by_ref_to_property.phpt
  it("Foreach by ref assignment to property", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\nforeach ([0] as &$obj->prop) {\n    var_dump($obj->prop);\n}\n?>")).toMatchSnapshot();
  });
});
