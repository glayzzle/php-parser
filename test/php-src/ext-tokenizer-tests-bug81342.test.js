// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug81342.phpt
  it("Bug #81342: New ampersand token parsing depends on new line after it", function () {
    expect(parser.parseCode("<?php\n$tokens = PhpToken::tokenize('<?php $x & $x; $x &\n    $baz;\n');\nforeach ($tokens as $token) {\n    echo $token->getTokenName(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
