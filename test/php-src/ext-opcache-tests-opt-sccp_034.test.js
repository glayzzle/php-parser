// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_034.phpt
  it("SCCP 034: memory leak", function () {
    expect(parser.parseCode("<?php\nis_array([\"$y $y\"]);\n?>\nDONE")).toMatchSnapshot();
  });
});
