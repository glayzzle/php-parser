// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation7.phpt
  it("Test token_get_all() function : usage variations - with increment/decrement operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different increment/decrement operators to test them for token\n *  ++ - T_INC(297)\n *  -- - T_DEC(296)\n*/\necho \"*** Testing token_get_all() : 'source' string with different increment/decrement operators ***\\n\";\n// increment/decrement operators : '++' , '--'\n$source = '<?php\n$a = 10, $b = 5;\n$a++;\n$b--;\necho $a;\n?>';\nvar_dump(token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
