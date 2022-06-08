// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_starts_with.phpt
  it("str_starts_with() function - unit tests for str_starts_with()", function () {
    expect(parser.parseCode("<?php\n$testStr = \"beginningMiddleEnd\";\nvar_dump(str_starts_with($testStr, \"beginning\"));\nvar_dump(str_starts_with($testStr, \"Beginning\"));\nvar_dump(str_starts_with($testStr, \"eginning\"));\nvar_dump(str_starts_with($testStr, $testStr));\nvar_dump(str_starts_with($testStr, $testStr.$testStr));\nvar_dump(str_starts_with($testStr, \"\"));\nvar_dump(str_starts_with(\"\", \"\"));\nvar_dump(str_starts_with(\"\", \" \"));\nvar_dump(str_starts_with($testStr, \"\\x00\"));\nvar_dump(str_starts_with(\"\\x00\", \"\"));\nvar_dump(str_starts_with(\"\\x00\", \"\\x00\"));\nvar_dump(str_starts_with(\"\\x00a\", \"\\x00\"));\nvar_dump(str_starts_with(\"a\\x00bc\", \"a\\x00b\"));\nvar_dump(str_starts_with(\"a\\x00b\", \"a\\x00d\"));\nvar_dump(str_starts_with(\"a\\x00b\", \"z\\x00b\"));\nvar_dump(str_starts_with(\"a\", \"a\\x00\"));\nvar_dump(str_starts_with(\"a\", \"\\x00a\"));\n?>")).toMatchSnapshot();
  });
});
