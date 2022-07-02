// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug78612.phpt
  it("Bug #78612 (strtr leaks memory when integer keys are used and the subject string shorter).", function () {
    expect(parser.parseCode("<?php\n$find_replace = [];\n$_a = 333000001;\n$_b = 5000001;\nfor ($j=0; $j<10; $j++) {\n    $find_replace[$_a + $j] = $_b + $j;\n}\necho strtr('Hello', $find_replace), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
