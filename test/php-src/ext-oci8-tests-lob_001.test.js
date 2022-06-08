// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_001.phpt
  it("oci_lob_write() and friends", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table lob_001_tab\",\n    \"create table lob_001_tab (id number, b1 blob)\",\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Test 1 OCI_B_BLOB bind\\n\";\n$statement = oci_parse($c, \"insert into lob_001_tab (id, b1) values (1, empty_blob()) returning b1 into :v_b1 \");\n$blob = oci_new_descriptor($c,OCI_D_LOB);\nvar_dump(oci_bind_by_name($statement, \":v_b1\", $blob, -1, OCI_B_BLOB));\noci_execute($statement, OCI_DEFAULT);\nvar_dump($blob);\necho \"Test 2\\n\";\nvar_dump($blob->write(\"test\"));\nvar_dump($blob->tell());\nvar_dump($blob->seek(10, OCI_SEEK_CUR));\nvar_dump($blob->write(\"string\"));\nvar_dump($blob->flush());\noci_commit($c);\necho \"Test 3\\n\";\n$s = oci_parse($c, \"select b1 from lob_001_tab where id = 1\");\noci_execute($s);\nvar_dump(oci_fetch_array($s, OCI_RETURN_LOBS));\necho \"Test 4 SQLT_BLOB (an alias for OCI_B_BLOB) bind\\n\";\n$statement = oci_parse($c, \"insert into lob_001_tab (id, b1) values (2, empty_blob()) returning b1 into :v_b1 \");\n$blob = oci_new_descriptor($c,OCI_D_LOB);\nvar_dump(oci_bind_by_name($statement, \":v_b1\", $blob, -1, SQLT_BLOB));\noci_execute($statement, OCI_DEFAULT);\nvar_dump($blob->write(\"test row 2\"));\n$s = oci_parse($c, \"select b1 from lob_001_tab where id = 2\");\noci_execute($s);\nvar_dump(oci_fetch_array($s, OCI_RETURN_LOBS));\n// Cleanup\n$stmtarray = array(\n    \"drop table lob_001_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
