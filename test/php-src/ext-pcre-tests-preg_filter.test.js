// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_filter.phpt
  it("preg_filter()", function () {
    expect(parser.parseCode("<?php\n$subject = array('1', 'a', '2', 'b', '3', 'A', 'B', '4');\n$pattern = array('/\\d/', '/[a-z]/', '/[1a]/');\n$replace = array('A:$0', 'B:$0', 'C:$0');\nvar_dump(preg_filter($pattern, $replace, $subject));\n?>")).toMatchSnapshot();
  });
});
