// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_016.phpt
  it("SCCP 016: Used constant instructions should be replaced with QM_ASSIGN", function () {
    expect(parser.parseCode("<?php\nreturn isset($undef) || php_sapi_name() == php_sapi_name();\n?>")).toMatchSnapshot();
  });
});
