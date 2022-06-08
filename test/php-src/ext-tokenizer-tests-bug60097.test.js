// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug60097.phpt
  it("Bug 60097: token_get_all fails to lex nested heredoc", function () {
    expect(parser.parseCode("<?php\nvar_dump(token_get_all('<?php\n<<<DOC1\n{$s(<<<DOC2\nDOC2\n)}\nDOC1;\n'));\n?>")).toMatchSnapshot();
  });
});
