// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug47859.phpt
  it("Bug #47859 (parse_ini_file() does not like asterisk (*) in key in the beginning)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_ini_string('*key = \"*value\"'));\nvar_dump(parse_ini_string('-key = \"-value\"'));\nvar_dump(parse_ini_string('_key = \"_value\"'));\nvar_dump(parse_ini_string('key* = \"value*\"'));\nvar_dump(parse_ini_string('key.*.* = \"value.*.*\"'));\nvar_dump(parse_ini_string('*.*.key = \"*.*.value\"'));\nvar_dump(parse_ini_string('k*e*y = \"v*a*lue\"'));\n?>")).toMatchSnapshot();
  });
});
