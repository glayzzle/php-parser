// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug24281.phpt
  it("Bug #24281 (str_replace count not returned if variable wasn't initialized)", function () {
    expect(parser.parseCode("<?php\n$string = \"He had had to have had it\";\n$newstring = str_replace(\"had\", \"foo\", $string, $count);\nprint \"$count changes were made.\\n\";\n$count = \"foo\";\n$newstring = str_replace(\"had\", \"foo\", $string, $count);\nprint \"$count changes were made.\\n\";\n?>")).toMatchSnapshot();
  });
});
