// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/strings/bug22592.phpt
  it("Bug #22592 (Cascading assignments to strings with curly braces broken)", function () {
    expect(parser.parseCode("<?php\n$wrong = $correct = 'abcdef';\n$t = $x[] = 'x';\nvar_dump($correct);\nvar_dump($wrong);\n$correct[1] = '*';\n$correct[3] = '*';\n$correct[5] = '*';\n// This produces the\n$wrong[1] = $wrong[3] = $wrong[5] = '*';\nvar_dump($correct);\nvar_dump($wrong);\n?>")).toMatchSnapshot();
  });
});
