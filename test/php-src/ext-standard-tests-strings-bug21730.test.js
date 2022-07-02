// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug21730.phpt
  it("Bug #21730 (*scanf \"%n\" conversion flag gives string instead of integer)", function () {
    expect(parser.parseCode("<?php\n$foo = \"ABC = DEF\";\n$fmt = \"%s = %s %n\";\n$res_a = array();\n/* $res_a[2] is supposed to be a integer value that\n * represents the number of characters consumed so far\n */\nsscanf($foo, $fmt, $res_a[0], $res_a[1], $res_a[2]);\n$res_b = sscanf($foo, $fmt);\nvar_dump($res_a);\nvar_dump($res_b);\n?>")).toMatchSnapshot();
  });
});
