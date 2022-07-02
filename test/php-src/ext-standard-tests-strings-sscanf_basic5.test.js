// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_basic5.phpt
  it("Test sscanf() function : basic functionality - exponential format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sscanf() : basic functionality -using exponential format ***\\n\";\n$str = \"10.12345 10.12345E3 10.12345e3 -10.12345e4\" ;\n$format1 = \"%e %e %e %e\";\n$format2 = \"%E %E %E %E\";\necho \"\\n-- Try sccanf() WITHOUT optional args --\\n\";\n// extract details using short format\nlist($arg1, $arg2, $arg3, $arg4) = sscanf($str, $format1);\nvar_dump($arg1, $arg2, $arg3, $arg4);\nlist($arg1, $arg2, $arg3, $arg4) = sscanf($str, $format2);\nvar_dump($arg1, $arg2, $arg3, $arg4);\necho \"\\n-- Try sccanf() WITH optional args --\\n\";\n// extract details using long  format\n$res = sscanf($str, $format1, $arg1, $arg2, $arg3, $arg4);\nvar_dump($res, $arg1, $arg2, $arg3, $arg4);\n$res = sscanf($str, $format2,$arg1, $arg2, $arg3, $arg4);\nvar_dump($res, $arg1, $arg2, $arg3, $arg4);\n?>")).toMatchSnapshot();
  });
});
