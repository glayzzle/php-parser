// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug70232.phpt
  it("Bug #70232 (Incorrect bump-along behavior with \\K and empty string match)", function () {
    expect(parser.parseCode("<?php\n$pattern = '~(?: |\\G)\\d\\B\\K~';\n$subject = \"123 a123 1234567 b123 123\";\npreg_match_all($pattern, $subject, $matches);\nvar_dump($matches);\nvar_dump(preg_replace($pattern, \"*\", $subject));\nvar_dump(preg_split($pattern, $subject));\n?>")).toMatchSnapshot();
  });
});
