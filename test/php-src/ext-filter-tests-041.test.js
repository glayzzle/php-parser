// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/041.phpt
  it("COOKIE multiple cookie test", function () {
    expect(parser.parseCode("<?php\nvar_dump($_COOKIE);\nvar_dump(filter_has_var(INPUT_COOKIE, \"abc\"));\nvar_dump(filter_input(INPUT_COOKIE, \"abc\"));\nvar_dump(filter_input(INPUT_COOKIE, \"def\"));\nvar_dump(filter_input(INPUT_COOKIE, \"xyz\"));\nvar_dump(filter_has_var(INPUT_COOKIE, \"bogus\"));\nvar_dump(filter_input(INPUT_COOKIE, \"xyz\", FILTER_SANITIZE_SPECIAL_CHARS));\n?>")).toMatchSnapshot();
  });
});
