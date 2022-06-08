// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/connection_status.phpt
  it("int connection_status ( void );", function () {
    expect(parser.parseCode("<?php\nvar_dump(connection_status() == CONNECTION_NORMAL);\n?>")).toMatchSnapshot();
  });
});
