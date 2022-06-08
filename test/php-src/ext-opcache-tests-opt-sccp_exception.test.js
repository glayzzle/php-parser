// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_exception.phpt
  it("Exception thrown during SCCP evaluation", function () {
    expect(parser.parseCode("<?php\nvar_dump(version_compare('1.2', '2.1', '??'));\n?>")).toMatchSnapshot();
  });
});
