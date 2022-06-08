// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation3.phpt
  it("Test token_get_all() function : usage variations - with logical operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different logical operators to test them for tokens\n *   and - T_AND_LOGICAL_AND(265),\n *   or - T_LOGICAL_OR(263),\n *   xor - T_LOGICAL_XOR(264),\n *   && - T_BOOLEAN_AND(279),\n *   || - T_BOOLEAN_OR(278)\n*/\necho \"*** Testing token_get_all() : 'source' string with different logical operators ***\\n\";\n// logical operators : 'and', 'or', 'xor', '&&', '||'\n$source = array (\n  '<?php $a = 1 and 024; ?>',\n  '<?php $b = $b or 0X1E; ?>',\n  '<?php $c = $a xor $b; ?>',\n  '<?php $a = $b && 2; ?>',\n  '<?php $b = $b || 1; ?>'\n);\nfor($count = 0; $count < count($source); $count++) {\n  echo \"-- Iteration \".($count + 1).\" --\\n\";\n  var_dump( token_get_all($source[$count]));\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
