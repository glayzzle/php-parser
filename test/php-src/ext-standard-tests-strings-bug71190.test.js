// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug71190.phpt
  it("Bug #71190 (substr_replace converts integers in original $search array to strings)", function () {
    expect(parser.parseCode("<?php\n$b = [0, 1, 2];\nvar_dump($b);\nsubstr_replace(\"test\", $b, \"1\");\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
