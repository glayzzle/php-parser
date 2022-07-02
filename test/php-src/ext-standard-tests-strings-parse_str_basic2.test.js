// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/parse_str_basic2.phpt
  it("Test parse_str() function : non-default arg_separator.input specified", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_str() : non-default arg_separator.input specified ***\\n\";\n$s1 = \"first=val1/second=val2/third=val3\";\nvar_dump(parse_str($s1, $result));\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
