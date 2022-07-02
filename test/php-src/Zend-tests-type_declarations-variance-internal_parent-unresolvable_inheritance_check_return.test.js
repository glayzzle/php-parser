// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/internal_parent/unresolvable_inheritance_check_return.phpt
  it("Test unresolvable inheritance check due to unavailable return type when the parent has a tentative return type.", function () {
    expect(parser.parseCode("<?php\nclass Test extends DateTime {\n    public static function createFromFormat($format, $datetime, $timezone = null): Wrong { }\n}\n?>")).toMatchSnapshot();
  });
});
