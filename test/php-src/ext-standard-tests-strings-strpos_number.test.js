// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strpos_number.phpt
  it("strpos() matching numbers", function () {
    expect(parser.parseCode("<?php\n// Integer is handles as an octal representation, so nothing to match\nvar_dump(strpos(\"foo 11\", 11));\n// int(111) is string(\"o\") in octal. Match expected\nvar_dump(strpos(\"foo bar\", 111));\n// string(\"11\") is contained\nvar_dump(strpos(\"foo 11\", \"11\"));\n?>")).toMatchSnapshot();
  });
});
