// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_000.phpt
  it("DBA DB4 handler test", function () {
    expect(parser.parseCode("<?php\n$handler = 'db4';\nrequire_once(__DIR__ .'/test.inc');\nrequire_once(__DIR__ .'/dba_handler.inc');\n?>")).toMatchSnapshot();
  });
});
