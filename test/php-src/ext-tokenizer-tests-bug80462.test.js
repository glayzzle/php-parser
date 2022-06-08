// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug80462.phpt
  it("Bug #80462: Nullsafe operator tokenize with TOKEN_PARSE flag fails", function () {
    expect(parser.parseCode("<?php\nforeach (PhpToken::tokenize('<?php $foo = $a?->b();', TOKEN_PARSE) as $token) {\n    echo $token->getTokenName(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
