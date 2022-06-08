// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_gdbm.phpt
  it("DBA GDBM handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'gdbm';\n    require_once __DIR__ .'/test.inc';\n    $lock_flag = ''; // lock in library\n    require_once __DIR__ .'/dba_handler.inc';\n    // Read during write is system dependent. Important is that there is no deadlock\n?>")).toMatchSnapshot();
  });
});
