// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation5.phpt
  it("Test token_get_all() function : usage variations - with assignment operators", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different assignment operators to test them for tokens\n *  += - T_PLUS_EQUAL(277), -= - T_MINUS-EQUAL(276),\n *  *= - T_MUL_EQUAL(275), /= - T_DIVIDE_EQUAL(274),\n *  %= - T_MOD_EQUAL(272), &= - T_AND_EQUAL(271),\n *  |= - T_OR_EQUAL(271), ^= - T_EXOR_EQUAL(269),\n *  >>= - T_SR_EQUAL(267), <<= - T_SL_EQUAL(268), .= - T_CONCAT_EQUAL(273)\n*/\necho \"*** Testing token_get_all() : 'source' string with different assignment operators ***\\n\";\n// assignment operators : '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '>>=', '<<=', '.='\n$source = '<?php\n$a = 1, $b = 2;\n$c += $b;\n$b -= $a;\n$a *= 2;\n$d /= 10.50;\n$a %= 10.50;\n$b &= $c;\n$c |= 1;\n$d ^= 5;\n$a >>= 1;\n$b <<= 2;\n$d .= \"hello world\";\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
