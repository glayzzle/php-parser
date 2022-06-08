// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ucwords_variation5.phpt
  it("Test ucwords() function : usage variations - custom delimiters", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ucwords() : usage variations ***\\n\";\nvar_dump(ucwords('testing-dashed-words', '-'));\nvar_dump(ucwords('test(braced)words', '()'));\nvar_dump(ucwords('testing empty delimiters', ''));\nvar_dump(ucwords('testing ranges', 'a..e'));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
