// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_assign_ref_string_offset_error.phpt
  it("String offset error during list() by-ref assignment", function () {
    expect(parser.parseCode("<?php\n$a = [0];\n$v = 'b';\n$i = 0;\nlist(&$a[$i++]) = $v;\n?>")).toMatchSnapshot();
  });
});
