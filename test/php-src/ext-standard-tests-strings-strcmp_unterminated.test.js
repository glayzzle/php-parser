// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strcmp_unterminated.phpt
  it("strnat(case)cmp(): potential OOB access for unterminated strings", function () {
    expect(parser.parseCode("<?php\n$a = zend_create_unterminated_string('333');\n$b = zend_create_unterminated_string('333 ');\nvar_dump(\n    strnatcmp($a, $b),\n    strnatcasecmp($b, $a)\n);\nzend_terminate_string($a);\nzend_terminate_string($b);\n?>")).toMatchSnapshot();
  });
});
