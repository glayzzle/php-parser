// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/connection_aborted.phpt
  it("int connection_aborted ( void );", function () {
    expect(parser.parseCode("<?php\nvar_dump(connection_aborted());\n?>")).toMatchSnapshot();
  });
});
