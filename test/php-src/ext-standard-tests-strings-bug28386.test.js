// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug28386.phpt
  it("Bug #28386 (wordwrap() wraps text 1 character too soon)", function () {
    expect(parser.parseCode("<?php\n$text = \"Some text\";\n$string = \"$text $text $text $text\";\necho wordwrap($string, 9);\n?>")).toMatchSnapshot();
  });
});
