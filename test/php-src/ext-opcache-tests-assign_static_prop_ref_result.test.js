// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/assign_static_prop_ref_result.phpt
  it("ASSIGN_STATIC_PROP_REF result should have live range", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static $prop;\n}\nTest::$prop =& $v + UNDEF;\n?>")).toMatchSnapshot();
  });
});
