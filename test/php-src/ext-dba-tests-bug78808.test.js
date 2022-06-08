// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug78808.phpt
  it("Bug #78808 ([LMDB] MDB_MAP_FULL: Environment mapsize limit reached)", function () {
    expect(parser.parseCode("<?php\n$handler = 'lmdb';\nrequire_once __DIR__ .'/test.inc';\n$value = str_repeat('*', 0x100000);\n$lmdb_h = dba_open($db_filename, 'c', 'lmdb', 0644, 5*1048576);\nfor ($i = 0; $i < 3; $i++) {\n    dba_insert('key' . $i, $value, $lmdb_h);\n}\ndba_close($lmdb_h);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
