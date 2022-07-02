// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation14.phpt
  it("Test strrpos() function : usage variations - negative offset with empty needle", function () {
    expect(parser.parseCode("<?php\n$haystack = \"Hello,\\t\\n\\0\\n  $&!#%()*<=>?@hello123456he \\x234 \\101 \";\nvar_dump(strlen($haystack));\nvar_dump( strrpos($haystack, \"\", -1) );\nvar_dump( strrpos($haystack, \"\", -10) );\nvar_dump( strrpos($haystack, \"\", -26) );\nvar_dump( strrpos($haystack, \"\", -44) );\n?>\nDONE")).toMatchSnapshot();
  });
});
