// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/parse_ini_string_error.phpt
  it("Ini parsing errors should not result in memory leaks", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_ini_string('a=\"b'));\n?>")).toMatchSnapshot();
  });
});
