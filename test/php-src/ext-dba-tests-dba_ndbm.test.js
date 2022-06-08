// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_ndbm.phpt
  it("DBA NDBM handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'ndbm';\n    require_once __DIR__ .'/test.inc';\n    require_once __DIR__ .'/dba_handler.inc';\n?>")).toMatchSnapshot();
  });
});
