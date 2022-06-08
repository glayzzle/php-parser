// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_039.phpt
  it("Test CLOB->write() for multiple inserts", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\necho \"Test 1: CLOB\\n\";\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (clob)\n                      VALUES (empty_clob())\n                      RETURNING\n                               clob\n                      INTO :v_clob \";\n$s = oci_parse($c,$ora_sql);\n$clob = oci_new_descriptor($c,OCI_DTYPE_LOB);\noci_bind_by_name($s,\":v_clob\", $clob,-1,OCI_B_CLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($clob->write(\"clob test 1\"));\noci_execute($s, OCI_DEFAULT);\nvar_dump($clob->write(\"clob test 2\"));\noci_execute($s, OCI_DEFAULT);\nvar_dump($clob->write(\"clob test 3\"));\n$s = oci_parse($c,\"select clob from \".$schema.$table_name);\nvar_dump(oci_execute($s));\noci_fetch_all($s, $res);\nvar_dump($res);\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
