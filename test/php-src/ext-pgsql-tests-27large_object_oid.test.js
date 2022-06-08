// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/27large_object_oid.phpt
  it("PostgreSQL create large object with given oid", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\necho \"create LO from int\\n\";\npg_exec ($db, \"begin\");\n$oid = pg_lo_create ($db, 21000);\nif (!$oid) echo (\"pg_lo_create() error\\n\");\nif ($oid != 21000) echo (\"pg_lo_create() wrong id\\n\");\npg_lo_unlink ($db, $oid);\npg_exec ($db, \"commit\");\necho \"create LO from string\\n\";\npg_exec ($db, \"begin\");\n$oid = pg_lo_create ($db, \"21001\");\nif (!$oid) echo (\"pg_lo_create() error\\n\");\nif ($oid != 21001) echo (\"pg_lo_create() wrong id\\n\");\npg_lo_unlink ($db, $oid);\npg_exec ($db, \"commit\");\necho \"create LO using default connection\\n\";\npg_exec (\"begin\");\n$oid = pg_lo_create (21002);\nif (!$oid) echo (\"pg_lo_create() error\\n\");\nif ($oid != 21002) echo (\"pg_lo_create() wrong id\\n\");\npg_lo_unlink ($oid);\npg_exec (\"commit\");\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
