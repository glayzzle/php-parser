// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug36436.phpt
  it("Bug #36436 (DBA problem with Berkeley DB4)", function () {
    expect(parser.parseCode("<?php\n$handler = 'db4';\nrequire_once(__DIR__ .'/test.inc');\n$db = dba_popen($db_filename, 'c', 'db4');\ndba_insert('X', 'XYZ', $db);\ndba_insert('Y', '123', $db);\nvar_dump($db, dba_fetch('X', $db));\nvar_dump(dba_firstkey($db));\nvar_dump(dba_nextkey($db));\ndba_close($db);\n?>")).toMatchSnapshot();
  });
});
