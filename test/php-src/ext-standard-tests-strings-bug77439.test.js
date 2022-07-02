// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug77439.phpt
  it("Bug #77439: parse_str segfaults when inserting item into existing array", function () {
    expect(parser.parseCode("<?php\n$vars = ['a' => []];\nparse_str('a[1]=1', $vars);\nvar_dump($vars['a']);\n?>")).toMatchSnapshot();
  });
});
