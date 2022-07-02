// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_basic8.phpt
  it("Test sscanf() function : basic functionality - hexadecimal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sscanf() : basic functionality - - using hexadecimal format ***\\n\";\n$str = \"129 12F 123B -123B 01ABC 1G\";\n$format1 = \"%x %x %x %x %x %x\";\n$format2 = \"%X %X %X %X %X %X\";\necho \"\\n-- Try sccanf() WITHOUT optional args --\\n\";\n// extract details using short format\nlist($arg1, $arg2, $arg3, $arg4, $arg5, $arg6) = sscanf($str, $format1);\nvar_dump($arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\nlist($arg1, $arg2, $arg3, $arg4, $arg5, $arg6) = sscanf($str, $format2);\nvar_dump($arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\necho \"\\n-- Try sccanf() WITH optional args --\\n\";\n// extract details using long  format\n$res = sscanf($str, $format1, $arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\nvar_dump($res, $arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\n$res = sscanf($str, $format2, $arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\nvar_dump($res, $arg1, $arg2, $arg3, $arg4, $arg5, $arg6);\n?>")).toMatchSnapshot();
  });
});
