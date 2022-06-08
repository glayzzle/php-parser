// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation15.phpt
  it("Test token_get_all() function : usage variations - heredoc string for 'source'", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with heredoc 'source' string with all different types of token and heredoc string within\n *     <<<EOT - T_START_HEREDOC(371)\n *     EOT - T_END_HEREDOC(372)\n*/\necho \"*** Testing token_get_all() : with heredoc source string ***\\n\";\n$source = <<<EOT\n<?=\n  \\$a = 2;\n  \\$b = 1;\n  \\$c = <<<EOS\n  This is to test\n  heredoc string\nEOS;\n  echo \\$a + \\$b;\n  function myFunction(\\$a)\n  {\n    var_dump(\\$a);\n  }\n  if(\\$b < 10) {\n    \\$b++;\n  }\n  else\n    \\$b--;\n  while(\\$a > 0) {\n    echo \"*\";\n    \\$a--;\n  }\n  myFunction(10);\n?>\nEOT;\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
