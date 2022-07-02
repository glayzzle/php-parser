// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos_variation6.phpt
  it("Test strrpos() function : usage variations - negative offset with empty needle", function () {
    expect(parser.parseCode("<?php\n$haystack = \"Hello,\\t\\n\\0\\n  $&!#%()*<=>?@hello123456he \\x234 \\101 \";\nvar_dump(strlen($haystack));\nvar_dump( strripos($haystack, \"\", -1) );\nvar_dump( strripos($haystack, \"\", -10) );\nvar_dump( strripos($haystack, \"\", -26) );\nvar_dump( strripos($haystack, \"\", -44) );\n?>\nDONE")).toMatchSnapshot();
  });
});
