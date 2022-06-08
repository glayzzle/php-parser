// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_044.phpt
  it("oci_lob_truncate() with default parameter value", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table lob_044_tab\",\n    \"create table lob_044_tab (blob BLOB)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1 - truncate on insert\\n\";\n$s = oci_parse($c, \"INSERT INTO lob_044_tab (blob) VALUES (empty_blob()) RETURNING blob INTO :v_blob \");\n$blob = oci_new_descriptor($c, OCI_D_LOB);\noci_bind_by_name($s,\":v_blob\", $blob, -1, OCI_B_BLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($blob->write(\"this is a biiiig faaat test string. why are you reading it, I wonder? =)\"));\nvar_dump($blob->seek(0));\nvar_dump($blob->read(10000));\nvar_dump($blob->truncate());\nvar_dump($blob->seek(0));\nvar_dump($blob->read(10000));\noci_commit($c);\n// Read it back\necho \"\\nTest 2 - read it back\\n\";\n$s = oci_parse($c, \"SELECT blob FROM lob_044_tab FOR UPDATE\");\noci_execute($s, OCI_DEFAULT);\n$row = oci_fetch_array($s);\nvar_dump($row[0]->read(10000));\n// Clean up\n$stmtarray = array(\n    \"drop table lob_044_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
