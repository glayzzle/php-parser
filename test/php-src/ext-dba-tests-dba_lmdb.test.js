// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_lmdb.phpt
  it("DBA LMDB handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'lmdb';\n    require_once __DIR__ .'/test.inc';\n    $lock_flag = ''; // lock in library\n    require_once __DIR__ .'/dba_handler.inc';\n?>")).toMatchSnapshot();
  });
});
