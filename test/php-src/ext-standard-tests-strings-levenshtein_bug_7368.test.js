// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/levenshtein_bug_7368.phpt
  it("levenshtein() bug 7368", function () {
    expect(parser.parseCode("<?php\nvar_dump(levenshtein('13458', '12345'));\nvar_dump(levenshtein('1345', '1234'));\n?>")).toMatchSnapshot();
  });
});
