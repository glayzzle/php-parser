// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_ends_with.phpt
  it("str_ends_with() function - unit tests for str_ends_with()", function () {
    expect(parser.parseCode("<?php\n$testStr = \"beginningMiddleEnd\";\nvar_dump(str_ends_with($testStr, \"End\"));\nvar_dump(str_ends_with($testStr, \"end\"));\nvar_dump(str_ends_with($testStr, \"en\"));\nvar_dump(str_ends_with($testStr, $testStr));\nvar_dump(str_ends_with($testStr, $testStr.$testStr));\nvar_dump(str_ends_with($testStr, \"\"));\nvar_dump(str_ends_with(\"\", \"\"));\nvar_dump(str_ends_with(\"\", \" \"));\nvar_dump(str_ends_with($testStr, \"\\x00\"));\nvar_dump(str_ends_with(\"\\x00\", \"\"));\nvar_dump(str_ends_with(\"\\x00\", \"\\x00\"));\nvar_dump(str_ends_with(\"a\\x00\", \"\\x00\"));\nvar_dump(str_ends_with(\"ab\\x00c\", \"b\\x00c\"));\nvar_dump(str_ends_with(\"a\\x00b\", \"d\\x00b\"));\nvar_dump(str_ends_with(\"a\\x00b\", \"a\\x00z\"));\nvar_dump(str_ends_with(\"a\", \"\\x00a\"));\nvar_dump(str_ends_with(\"a\", \"a\\x00\"));\n?>")).toMatchSnapshot();
  });
});
