// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_037.phpt
  it("SCCP 037: Memory leak", function () {
    expect(parser.parseCode("<?php\n[!![[new ERROR]]];\n?>\nDONE")).toMatchSnapshot();
  });
});
