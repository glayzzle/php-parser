// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db1.phpt
  it("DBA DB1 handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'db1';\n    require_once __DIR__ .'/test.inc';\n    require_once __DIR__ .'/dba_handler.inc';\n?>")).toMatchSnapshot();
  });
});
