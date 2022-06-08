// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_cdb.phpt
  it("DBA CDB handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'cdb';\n    require_once(__DIR__ .'/test.inc');\n    require_once(__DIR__ .'/dba_handler.inc');\n?>")).toMatchSnapshot();
  });
});
