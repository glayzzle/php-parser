// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73998.phpt
  it("Bug #73998 (array_key_exists fails on arrays created by get_object_vars)", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$a->{1234} = \"Numeric\";\n$a->a1234 = \"String\";\n$properties = get_object_vars($a);\nvar_dump(array_key_exists(1234, $properties));\necho \"Value: {$properties[1234]}\\n\";\n?>")).toMatchSnapshot();
  });
});
