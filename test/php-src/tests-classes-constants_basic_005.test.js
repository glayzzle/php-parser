// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_basic_005.phpt
  it("Test constants with default values based on other constants.", function () {
    expect(parser.parseCode("<?php\n  class C\n  {\n      const CONST_2 = self::CONST_1;\n      const CONST_1 = self::BASE_CONST;\n      const BASE_CONST = 'hello';\n  }\n  var_dump(C::CONST_1, C::CONST_2);\n?>")).toMatchSnapshot();
  });
});
