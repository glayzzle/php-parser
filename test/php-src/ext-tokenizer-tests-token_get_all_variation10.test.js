// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation10.phpt
  it("Test token_get_all() function : usage variations - with constant tokens", function () {
    expect(parser.parseCode("<?php\n/*\n * Using different types of constants in 'source' string to check them for token\n * integer const - T_LNUMBER(305)\n * float/double/real const - T_DNUMBER(306)\n * string cosnt - T_CONSTANT_ESCAPED_STRING(315)\n * bool const (no tokens specified) - T_UNKNOWN(307)\n * null const (no tokens specified) - T_UNKNOWN(307)\n*/\necho \"*** Testing token_get_all() :  'source' string with different constants ***\\n\";\n$a = 1;\n$b = 0;\n$source = array (\n  // int const\n  '<?php $a = 1 + 034; $b = $a + 0x3F; ?>',\n  // float const\n  '<?php $a = 0.23E-2 + 0.43e2 + 0.5; ?>',\n  // string const\n  '<?php $a = \"hello \".\\'world\\'; ?>',\n  // bool const\n  \"<?php \\$a = (\\$b)? true : false; ?>\",\n  \"<?php \\$b = (\\$a)? FALSE : TRUE; ?>\",\n  // null const\n  '<?php $b = null | NULL; ?>'\n);\nfor($count = 0; $count < count($source); $count++) {\n  echo \"-- Iteration \".($count + 1).\" --\\n\";\n  var_dump( token_get_all($source[$count]));\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
