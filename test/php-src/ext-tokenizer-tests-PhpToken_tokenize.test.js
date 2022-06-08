// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_tokenize.phpt
  it("PhpToken::tokenize() method", function () {
    expect(parser.parseCode("<?php\n$code = <<<'PHP'\n<?php\nfunction foo() {\n    echo \"bar\";\n}\nPHP;\nvar_dump(PhpToken::tokenize($code));\nvar_dump(PhpToken::tokenize($code, TOKEN_PARSE));\n?>")).toMatchSnapshot();
  });
});
