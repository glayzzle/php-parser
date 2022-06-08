// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation12.phpt
  it("Test token_get_all() function : usage variations - with predefined language constants", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with following predefined language constants:\n *   __FILE__     - T_FILE\n *   __CLASS__    - T_CLASS_C\n *   __TRAIT__    - T_TRAIT_C\n *   __FUNCTION__ - T_FUNC_C\n *   __LINE__     - T_LINE\n *   __METHOD__   - T_METHOD_C\n*/\necho \"*** Testing token_get_all() : with language constants ***\\n\";\n// parsing __FILE__ token\necho \"-- with FILE --\\n\";\n$source = \"<?php\n\\$fp =  fopen(__FILE__, 'r');\n?>\";\nvar_dump( token_get_all($source));\n// parsing __CLASS__, __TRAIT__ and __FUNCTION__ tokens\necho \"-- with CLASS, TRAIT and FUNCTION --\\n\";\n$source = '<?php\nclass MyClass\n{\n  echo  __CLASS__;\n  echo  __TRAIT__;\n  function myFunction()\n  {  echo  __FUNCTION__; }\n}\n?>';\nvar_dump( token_get_all($source));\n// parsing __LINE__ and __METHOD__ tokens\necho \"-- with LINE and METHOD --\\n\";\n$source = '<?php\n  $a = __LINE__;\n  $b = $b.__METHOD__;\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
