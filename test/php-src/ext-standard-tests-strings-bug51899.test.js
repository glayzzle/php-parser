// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug51899.phpt
  it("Bug #51899 (Parse error in parse_ini_file() function when empy value followed by no newline)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_ini_string('a='));\nvar_dump(parse_ini_string('a= '));\nvar_dump(parse_ini_string('a='.PHP_EOL));\nvar_dump(parse_ini_string('a=b '));\nvar_dump(parse_ini_string(''));\nvar_dump(parse_ini_string(\"\\0\"));\n?>")).toMatchSnapshot();
  });
});
