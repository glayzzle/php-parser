// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug49692.phpt
  it("Bug #49692: parse_ini_file() throws errors when key contains '/' (forward slash)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_ini_file('bug49692.ini', true));\n?>")).toMatchSnapshot();
  });
});
