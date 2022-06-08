// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_tcadb.phpt
  it("DBA TCADB handler test", function () {
    expect(parser.parseCode("<?php\n    $handler = 'tcadb';\n    $lock_flag = 'l';\n    $db_filename = $db_file = __DIR__ .'/test0.tch';\n    @unlink($db_filename);\n    @unlink($db_filename.'.lck');\n    require_once __DIR__ .'/dba_handler.inc';\n?>")).toMatchSnapshot();
  });
});
