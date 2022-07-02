// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug33076.phpt
  it("Bug #33076 (str_ireplace() incorrectly counts result string length and may cause segfault)", function () {
    expect(parser.parseCode("<?php\n$value = str_ireplace(\"t\", \"bz\", \"Text\");\nvar_dump($value);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
