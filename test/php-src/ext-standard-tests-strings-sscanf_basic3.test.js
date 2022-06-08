// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_basic3.phpt
  it("Test sscanf() function : basic functionality - float format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sscanf() : basic functionality -- using float format ***\\n\";\n$str = \"Part: Widget Length: 111.53 Width: 22.345 Depth: 12.4\";\n$format = \"Part: %s Length: %f Width: %f Depth: %f\";\necho \"\\n-- Try sccanf() WITHOUT optional args --\\n\";\n// extract details using short format\nlist($part, $length, $width, $depth) = sscanf($str, $format);\nvar_dump($part, $length, $width, $depth);\necho \"\\n-- Try sccanf() WITH optional args --\\n\";\n// extract details using long  format\n$res = sscanf($str, $format, $part, $length, $width, $depth);\nvar_dump($res, $part, $length, $width, $depth);\n?>")).toMatchSnapshot();
  });
});
