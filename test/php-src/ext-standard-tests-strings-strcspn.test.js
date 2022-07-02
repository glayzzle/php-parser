// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strcspn.phpt
  it("Test strcspn() behavior", function () {
    expect(parser.parseCode("<?php\n$a = \"22222222aaaa bbb1111 cccc\";\n$b = \"1234\";\nvar_dump($a);\nvar_dump($b);\nvar_dump(strcspn($a,$b));\nvar_dump(strcspn($a,$b,9));\nvar_dump(strcspn($a,$b,9,6));\nvar_dump(strcspn('a', 'B', 1, 2147483647));\n?>")).toMatchSnapshot();
  });
});
