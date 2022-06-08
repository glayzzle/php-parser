// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation2.phpt
  it("Test token_get_all() function : usage variations - with different arithmetic operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different arithmetic operators to test them for token\n * Arithmetic operators: +, -, *, /, % are not listed as specific operator tokens,\n *    so they are expected to return string - T_STRING\n*/\necho \"*** Testing token_get_all() : 'source' string with different arithmetic operators ***\\n\";\n// arithmetic operators - '+', '-', '*', '/', '%'\n$source = array (\n  '<?php $a = 1 + 2; ?>',\n  '<?php $b = $b - 2; ?>',\n  '<?php $c = $a * $b; ?>',\n  '<?php $a = $b % 2; ?>'\n);\nfor($count = 0; $count < count($source); $count++) {\n  echo \"-- Iteration \".($count + 1).\" --\\n\";\n  var_dump( token_get_all($source[$count]));\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
