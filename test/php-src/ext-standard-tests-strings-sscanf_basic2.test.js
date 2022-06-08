// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_basic2.phpt
  it("Test sscanf() function : basic functionality - integer format", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing sscanf() : basic functionality\n*/\necho \"*** Testing sscanf() : basic functionality - using integer format ***\\n\";\n$str = \"Part: Widget Serial Number: 1234789 Stock: 25\";\n$format = \"Part: %s Serial Number: %d Stock: %d\";\necho \"\\n-- Try sccanf() WITHOUT optional args --\\n\";\n// extract details using short format\nlist($part, $number, $stock) = sscanf($str, $format);\nvar_dump($part, $number, $stock);\necho \"\\n-- Try sccanf() WITH optional args --\\n\";\n// extract details using long  format\n$res = sscanf($str, $format, $part, $number, $stock);\nvar_dump($res, $part, $number, $stock);\n?>")).toMatchSnapshot();
  });
});
