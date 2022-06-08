// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_032.phpt
  it("oci_lob_write() and friends", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (id, clob)\n                      VALUES (2, empty_clob())\n                      RETURNING\n                               clob\n                      INTO :v_clob \";\n$statement = oci_parse($c,$ora_sql);\n$clob = oci_new_descriptor($c,OCI_D_LOB);\noci_bind_by_name($statement,\":v_clob\", $clob,-1,OCI_B_CLOB);\noci_execute($statement, OCI_DEFAULT);\noci_commit($c);  // This will cause subsequent ->write() to fail\n$clob->write(\"data\");\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
