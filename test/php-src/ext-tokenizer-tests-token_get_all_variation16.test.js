// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation16.phpt
  it("Test token_get_all() function : usage variations - with function constructs", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with different function keywords\n *   function - T_FUNCTION(333), return - T_RETURN(335)\n *   different functions:\n *     include() - T_INCLUDE(262), print() - T_PRINT(266),\n *     isset() - T_ISSET(349), list() - T_LIST(358),\n *     require() - T_REQUIRE(259), empty() - T_EMPTY(350),\n *     declare() - T_DECLARE(324), array() - T_ARRAY(359),\n *      __halt_compiler() - T_HALT_COMPILER(351)\n*/\necho \"*** Testing token_get_all() : with different function constructs ***\\n\";\n$source = '<?php\ndeclare(VALUE=100);\ninclude(\"addfile.php\");\nrequire(\"sumfile.php\");\nfunction myFunction($a)\n{\n  if($a % 2)\n    return 1;\n  else\n    exit;\n}\n$a = VALUE;\n$b = 20;\n$c = array(1,2);\n$b >>= 2;\nif($b <= 0)\n  die;\nelse\n  print($b);\nlist($value1,$value2) = $c;\nif(empty($value1) && !isset($value1)) {\n  myFunction();\n}\n?>';\n$tokens =  token_get_all($source);\nvar_dump($tokens);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
