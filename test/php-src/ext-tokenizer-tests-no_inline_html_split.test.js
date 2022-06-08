// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/no_inline_html_split.phpt
  it("Inline HTML should not be split at partial PHP tags", function () {
    expect(parser.parseCode("<?php\nvar_dump(token_get_all(<<<'PHP'\nFoo<?phpBar\nPHP));\n?>")).toMatchSnapshot();
  });
});
