// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_exception2.phpt
  it("Exception thrown during SCCP evaluation, separate file variation", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/sccp_exception2.inc';\n?>")).toMatchSnapshot();
  });
});
