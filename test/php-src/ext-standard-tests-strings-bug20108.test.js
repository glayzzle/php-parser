// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug20108.phpt
  it("Bug #20108 (Segfault on printf statement)", function () {
    expect(parser.parseCode("<?php\n    $a = \"boo\";\n    $z = sprintf(\"%580.58s\\n\", $a);\n    var_dump($z);\n?>")).toMatchSnapshot();
  });
});
