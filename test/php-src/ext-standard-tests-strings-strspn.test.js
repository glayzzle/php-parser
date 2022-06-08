// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strspn.phpt
  it("Test strspn() behavior", function () {
    expect(parser.parseCode("<?php\n$a = \"22222222aaaa bbb1111 cccc\";\n$b = \"1234\";\nvar_dump($a);\nvar_dump($b);\nvar_dump(strspn($a,$b));\nvar_dump(strspn($a,$b,2));\nvar_dump(strspn($a,$b,2,3));\n?>")).toMatchSnapshot();
  });
});
