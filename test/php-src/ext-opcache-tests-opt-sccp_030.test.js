// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_030.phpt
  it("SCCP 030: TYPE_CHECK inferred from type inference info", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_string(sys_get_temp_dir()));\n?>")).toMatchSnapshot();
  });
});
