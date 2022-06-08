// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/invalid_large_octal_with_underscores.phpt
  it("Large invalid octal number with underscores", function () {
    expect(parser.parseCode("<?php\nvar_dump(token_get_all(\"<?php 0_10000000000000000000009;\"));\n?>")).toMatchSnapshot();
  });
});
