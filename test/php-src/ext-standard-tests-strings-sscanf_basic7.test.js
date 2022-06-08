// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_basic7.phpt
  it("Test sscanf() function : basic functionality - octal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sscanf() : basic functionality - using octal format ***\\n\";\n$str = \"0123 -0123 +0123 0129 -0129 +0129\";\n$format = \"%o %o %o %o %o %o\";\necho \"\\n-- Try sccanf() WITHOUT optional args --\\n\";\n// extract details using short format\nlist($arg1, $arg2, $arg3, $arg4, $arg5, $arg6) = sscanf($str, $format);\nvar_dump($arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\necho \"\\n-- Try sccanf() WITH optional args --\\n\";\n// extract details using long  format\n$res = sscanf($str, $format, $arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\nvar_dump($res, $arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\n?>")).toMatchSnapshot();
  });
});
