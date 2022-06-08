// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_basic_001.phpt
  it("Class constant declarations", function () {
    expect(parser.parseCode("<?php\n  define('DEFINED', 1234);\n  $def = 456;\n  define('DEFINED_TO_VAR', $def);\n  define('DEFINED_TO_UNDEF_VAR', $undef);\n  class C\n  {\n      const c1 = 1, c2 = 1.5;\n      const c3 =  + 1, c4 =  + 1.5;\n      const c5 = -1, c6 = -1.5;\n      const c7 = __LINE__;\n      const c8 = __FILE__;\n      const c9 = __CLASS__;\n      const c10 = __METHOD__;\n      const c11 = __FUNCTION__;\n      const c12 = DEFINED;\n      const c13 = DEFINED_TO_VAR;\n      const c14 = DEFINED_TO_UNDEF_VAR;\n      const c15 = \"hello1\";\n      const c16 = 'hello2';\n      const c17 = C::c16;\n      const c18 = self::c17;\n  }\n  echo \"\\nAttempt to access various kinds of class constants:\\n\";\n  var_dump(C::c1);\n  var_dump(C::c2);\n  var_dump(C::c3);\n  var_dump(C::c4);\n  var_dump(C::c5);\n  var_dump(C::c6);\n  var_dump(C::c7);\n  var_dump(C::c8);\n  var_dump(C::c9);\n  var_dump(C::c10);\n  var_dump(C::c11);\n  var_dump(C::c12);\n  var_dump(C::c13);\n  var_dump(C::c14);\n  var_dump(C::c15);\n  var_dump(C::c16);\n  var_dump(C::c17);\n  var_dump(C::c18);\n  echo \"\\nExpecting fatal error:\\n\";\n  var_dump(C::c19);\n  echo \"\\nYou should not see this.\";\n?>")).toMatchSnapshot();
  });
});
