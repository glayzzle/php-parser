// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation8.phpt
  it("Test token_get_all() function : usage variations - with type casting operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different type casting operators to test them for token\n *  (int)/(integer) - T_INT_CAST(295), (float)/(real)/(double) - T_DOUBLE_CAST(294),\n *  (string) - T_STRING_CAST(293), (bool)/(boolean) - T_BOOL_CAST(290),\n *  (unset) - T_UNSET_CAST(289)\n*/\necho \"*** Testing token_get_all() : 'source' string with different type casting operators ***\\n\";\n// type casting operators : (int), (integer), (float), (double), (string), (array), (object), (bool), (boolean),(unset)\n$source = '<?php\n$a = 1, $b = 10.5\n$c = (int)$b + $a;\n$d = (float)$a + $b;\n$e = (string)$a.(string)$b;\nif((bool)$a) echo \"true\";\nif(!(boolean)$b) echo \"false\";\n$c = $c + (integer) 123.4e2;\n$d = $c - (real) 12;\n$b = (unset)$a;\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
