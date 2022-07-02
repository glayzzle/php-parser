// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/levenshtein_bug_16473.phpt
  it("levenshtein() bug 16473", function () {
    expect(parser.parseCode("<?php\nvar_dump(levenshtein('a', 'bc'));\nvar_dump(levenshtein('xa', 'xbc'));\nvar_dump(levenshtein('xax', 'xbcx'));\nvar_dump(levenshtein('ax', 'bcx'));\n?>")).toMatchSnapshot();
  });
});
