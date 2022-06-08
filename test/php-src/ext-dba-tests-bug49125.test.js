// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug49125.phpt
  it("Bug #49125 (Error in dba_exists C code)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$handler = 'db4';\nrequire_once(__DIR__ .'/test.inc');\n$db = dba_popen($db_filename, 'c', 'db4');\ndba_insert('foo', 'foo', $db);\nvar_dump(dba_exists('foo', $db));\ndba_close($db);\n?>")).toMatchSnapshot();
  });
});
