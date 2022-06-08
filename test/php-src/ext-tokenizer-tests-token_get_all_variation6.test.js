// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation6.phpt
  it("Test token_get_all() function : usage variations - with bitwise operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different bitwise operators to test them for token\n *  << - T_SL(287)\n *  >> - T_SR(286)\n*/\necho \"*** Testing token_get_all() : 'source' string with different bitwise operators ***\\n\";\n// bitwise operators : '<<' , '>>'\n$source = '<?php\n$a = 2, $b = 4;\n$a = $a << 2;\n$b = $b >> 2;\nvar_dump($a);\nvar_dump($b);\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
