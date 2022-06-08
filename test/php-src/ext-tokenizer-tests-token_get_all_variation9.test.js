// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation9.phpt
  it("Test token_get_all() function : usage variations - with different types of comments", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing 'source' argument with different style of comments\n */\n//  '//', '/* */', '#' - T_COMMENT(365)\n// '/** */' - T_DOC_COMMENT(366)\necho \"*** Testing token_get_all() : 'source' string with different comments ***\\n\";\n// types of comments: '//', '/* */', '#' & /** */\n$source = '<?php\n/** Performing addition operation on given values :\n  * a, b\n  */\n// int value\n$a = 10;\n$b = 20;\n$c = true; // bool value\n/*\n * Performing operation on $a,$b\n * display result\n */\n$c = $a + $b;\nvar_dump($c); # expected: int(30)\n# end of program\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
