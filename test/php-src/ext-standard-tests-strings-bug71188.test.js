// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug71188.phpt
  it("Bug #71188 (str_replace converts integers in original $search array to strings)", function () {
    expect(parser.parseCode("<?php\n$a = [0, 1, 2];\n$b = [\"Nula\", \"Jedna\", \"Dva\"];\nvar_dump($a);\nstr_replace($a, $b, \"1\");\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
