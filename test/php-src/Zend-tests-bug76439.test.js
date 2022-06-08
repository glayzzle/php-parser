// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76439.phpt
  it("Bug #76439: Don't always strip leading whitespace from heredoc T_ENCAPSED_AND_WHITESPACE tokens", function () {
    expect(parser.parseCode("<?php\n[$one, $two, $three, $four, $five, $six, $seven, $eight, $nine] = [1, 2, 3, 4, 5, 6, 7, 8, 9];\nvar_dump(<<<BAR\n $one-\n BAR);\nvar_dump(<<<BAR\n $two -\n BAR);\nvar_dump(<<<BAR\n $three\t-\n BAR);\nvar_dump(<<<BAR\n $four-$four\n BAR);\nvar_dump(<<<BAR\n $five-$five-\n BAR);\nvar_dump(<<<BAR\n $six-$six-$six\n BAR);\nvar_dump(<<<BAR\n $seven\n -\n BAR);\nvar_dump(<<<BAR\n $eight\n  -\n BAR);\nvar_dump(<<<BAR\n$nine\nBAR);\nvar_dump(<<<BAR\n -\n BAR);\nvar_dump(<<<BAR\n  -\n BAR);\n?>")).toMatchSnapshot();
  });
});
