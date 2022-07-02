// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_basic4.phpt
  it("Test sscanf() function : basic functionality - char format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sscanf() : basic functionality - using char format ***\\n\";\n$str = \"X = A + B - C\";\n$format = \"%c = %c + %c - %c\";\necho \"\\n-- Try sccanf() WITHOUT optional args --\\n\";\n// extract details using short format\nlist($arg1, $arg2, $arg3, $arg4) = sscanf($str, $format);\nvar_dump($arg1, $arg2, $arg3, $arg4);\necho \"\\n-- Try sccanf() WITH optional args --\\n\";\n// extract details using long  format\n$res = sscanf($str, $format, $arg1, $arg2, $arg3, $arg4);\nvar_dump($res, $arg1, $arg2, $arg3, $arg4);\n?>")).toMatchSnapshot();
  });
});
