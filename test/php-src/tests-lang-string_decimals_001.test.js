// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string_decimals_001.phpt
  it("String conversion with multiple decimal points", function () {
    expect(parser.parseCode("<?php\nfunction test($str) {\n  echo \"\\n--> Testing $str:\\n\";\n  var_dump((int)$str);\n  var_dump((float)$str);\n  var_dump($str > 0);\n}\ntest(\"..9\");\ntest(\".9.\");\ntest(\"9..\");\ntest(\"9.9.\");\ntest(\"9.9.9\");\n?>")).toMatchSnapshot();
  });
});
