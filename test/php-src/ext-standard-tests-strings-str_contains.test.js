// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_contains.phpt
  it("Test str_contains() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(str_contains(\"test string\", \"test\"));\nvar_dump(str_contains(\"test string\", \"string\"));\nvar_dump(str_contains(\"test string\", \"strin\"));\nvar_dump(str_contains(\"test string\", \"t s\"));\nvar_dump(str_contains(\"test string\", \"g\"));\nvar_dump(str_contains(\"te\".chr(0).\"st\", chr(0)));\nvar_dump(str_contains(\"tEst\", \"test\"));\nvar_dump(str_contains(\"teSt\", \"test\"));\nvar_dump(str_contains(\"\", \"\"));\nvar_dump(str_contains(\"a\", \"\"));\nvar_dump(str_contains(\"\", \"a\"));\nvar_dump(str_contains(\"\\\\\\\\a\", \"\\\\a\"));\n?>")).toMatchSnapshot();
  });
});
