// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug48240.phpt
  it("Bug #48240 (DBA Segmentation fault dba_nextkey)", function () {
    expect(parser.parseCode("<?php\n$handler = 'db4';\nrequire_once(__DIR__ .'/test.inc');\n$db = dba_open($db_filename, 'c', 'db4');\nvar_dump(dba_nextkey($db));\ndba_close($db);\n?>")).toMatchSnapshot();
  });
});
