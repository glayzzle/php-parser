// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation4.phpt
  it("Test token_get_all() function : usage variations - with comparison operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different comparison operators to test them for tokens\n *  == - T_IS_EQUAL(283), === - T_IS_IDENTICAL(281),\n *  >= - T_IS_GREATER_OR_EQUAL(284), <= - T_IS_LESS_OR_EQUAL(285)\n *  != - T_IS_NOT_EQUAL, <> - T_IS_NOT_EQUAL(282), !== - T_IS_NOT_IDENTICAL(280)\n*/\necho \"*** Testing token_get_all() : 'source' string with different comparison operators ***\\n\";\n// comparison operators : '==', '===', '>=', '<=', '!=', '!==', '<>'\n$source = '<?php\nif($a == 0)\n  echo \"== 0\";\nelseif($a === 2)\n  echo \"=== 2\";\nelseif($a >= 10 && $a <= 20)\n  echo \">= 10 & <=20\";\nelseif($a != 1 || $a <> 1)\n  echo \"!= 1\";\nelseif($a !== 1)\n  echo \"!==1\";\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
