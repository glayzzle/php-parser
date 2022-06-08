// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug41403.phpt
  it("Bug #41403 (json_decode cannot decode floats if localeconv decimal_point is not '.')", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_NUMERIC, 'de_DE');\nvar_dump(json_decode('[2.1]'));\nvar_dump(json_decode('[0.15]'));\nvar_dump(json_decode('[123.13452345]'));\nvar_dump(json_decode('[123,13452345]'));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
