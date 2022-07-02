// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_basic_003.phpt
  it("Ensure class properties and constants can be defined in terms of constants that are not known at compile time.", function () {
    expect(parser.parseCode("<?php\n  include 'constants_basic_003.inc';\n  class B\n  {\n      public static $a = A::MY_CONST;\n      public static $c = C::MY_CONST;\n      const ca = A::MY_CONST;\n      const cc = C::MY_CONST;\n  }\n  class C\n  {\n      const MY_CONST = \"hello from C\";\n  }\n  var_dump(B::$a);\n  var_dump(B::$c);\n  var_dump(B::ca);\n  var_dump(B::cc);\n?>")).toMatchSnapshot();
  });
});
