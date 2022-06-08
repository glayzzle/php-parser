// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_002.phpt
  it("oci_lob_write() and friends (with errors)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table lob_002_tab\",\n    \"create table lob_002_tab (id number, b1 BLOB)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n$statement = oci_parse($c, \"insert into lob_002_tab (id, b1) values (1, empty_blob()) returning b1 INTO :v_blob \");\n$blob = oci_new_descriptor($c,OCI_D_LOB);\noci_bind_by_name($statement,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($statement, OCI_DEFAULT);\nvar_dump($blob);\nvar_dump($blob->write(\"test\", -1));\nvar_dump($blob->write(\"test\", 1000000));\nvar_dump($blob->write(str_repeat(\"test\", 10000), 1000000));\nvar_dump($blob->tell());\nvar_dump($blob->flush());\noci_commit($c);\n$select_sql = \"select b1 from lob_002_tab where id = 1\";\n$s = oci_parse($c, $select_sql);\noci_execute($s);\n$row = oci_fetch_array($s, OCI_RETURN_LOBS);\nvar_dump(strlen($row[0]));\n// Cleanup\n$stmtarray = array(\n    \"drop table lob_002_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
