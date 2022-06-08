// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/pecl_bug16035.phpt
  it("PECL Bug #16035 (Crash with Oracle 10.2 connecting with a character set but ORACLE_HOME is not set)", function () {
    expect(parser.parseCode("<?php\noci_connect('abc', 'def', 'ghi', 'jkl');\n?>")).toMatchSnapshot();
  });
});
