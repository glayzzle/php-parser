// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/strings/004.phpt
  it("highlight_string() buffering", function () {
    expect(parser.parseCode("<?php\n$var = highlight_string(\"<br /><?php echo \\\"foo\\\"; ?><br />\");\n$var = highlight_string(\"<br /><?php echo \\\"bar\\\"; ?><br />\", TRUE);\necho \"\\n[$var]\\n\";\n?>")).toMatchSnapshot();
  });
});
