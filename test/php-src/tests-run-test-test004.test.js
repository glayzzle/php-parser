// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test004.phpt
  it("INI section allows '='", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_get('arg_separator.input'));\n?>")).toMatchSnapshot();
  });
});
