// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/highlight_heredoc.phpt
  it("highlight_string() handling of heredoc", function () {
    expect(parser.parseCode("<?php\n$str = '\n$x=<<<DD\njhdsjkfhjdsh\nDD\n.\"\";\n$a=<<<DDDD\njhdsjkfhjdsh\nDDDD;\n';\nhighlight_string($str);\n?>")).toMatchSnapshot();
  });
});
