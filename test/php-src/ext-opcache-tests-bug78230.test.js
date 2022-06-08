// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78230.phpt
  it("Bug #78230: Incorrect type check optimization", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    $y = (array) $x;\n    var_dump(is_array($y));\n}\n$ary = [1, 2];\n$ary[] = 3;\ntest($ary);\n$ary[] = 4;\nvar_dump($ary);\n?>")).toMatchSnapshot();
  });
});
