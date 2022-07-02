// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/levenshtein_bug_6562.phpt
  it("levenshtein() bug 6562", function () {
    expect(parser.parseCode("<?php\nvar_dump(levenshtein('debugg', 'debug'));\nvar_dump(levenshtein('ddebug', 'debug'));\nvar_dump(levenshtein('debbbug', 'debug'));\nvar_dump(levenshtein('debugging', 'debuging'));\n?>")).toMatchSnapshot();
  });
});
