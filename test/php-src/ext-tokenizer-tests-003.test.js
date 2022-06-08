// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/003.phpt
  it("token_get_all() and wrong parameters", function () {
    expect(parser.parseCode("<?php\nvar_dump(token_get_all(\"\"));\nvar_dump(token_get_all(0));\nvar_dump(token_get_all(-1));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
