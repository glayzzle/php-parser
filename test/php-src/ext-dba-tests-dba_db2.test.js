// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db2.phpt
  it("DBA DB2 handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'db2';\n    require_once __DIR__ .'/test.inc';\n    require_once __DIR__ .'/dba_handler.inc';\n?>")).toMatchSnapshot();
  });
});
