// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/024.phpt
  it("filter_var() and FILTER_SANITIZE_ENCODED", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"\\\"<br>blah</ph>\", FILTER_SANITIZE_ENCODED));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_ENCODED));\nvar_dump(filter_var(\"  text here  \", FILTER_SANITIZE_ENCODED));\nvar_dump(filter_var(\"!@#$%^&*()QWERTYUIOP{ASDFGHJKL:\\\"ZXCVBNM<>?\", FILTER_SANITIZE_ENCODED));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
