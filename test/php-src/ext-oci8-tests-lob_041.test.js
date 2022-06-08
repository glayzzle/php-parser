// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_041.phpt
  it("Check LOBS are valid after statement free", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n// Initialization\n$stmtarray = array(\n    \"DROP table lob_041_tab\",\n    \"CREATE table lob_041_tab(c1 CLOB)\",\n    \"INSERT INTO lob_041_tab VALUES('test data')\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Test 1 - explicit statement close\\n\";\n$s = oci_parse($c, \"SELECT C1 FROM lob_041_tab\");\n$desc = oci_new_descriptor($c, OCI_DTYPE_LOB);\noci_define_by_name($s, \"C1\", $desc);\noci_execute($s);\n$data = oci_fetch_assoc($s);\noci_free_statement($s);\necho $data['C1']->load(), \"\\n\";\noci_free_descriptor($desc);\necho \"\\nTest 2 - implicit statement close\\n\";\n$s = oci_parse($c, \"SELECT C1 FROM lob_041_tab\");\n$desc = oci_new_descriptor($c, OCI_DTYPE_LOB);\noci_define_by_name($s, \"C1\", $desc);\noci_execute($s);\n$data = oci_fetch_assoc($s);\n$s = null;\necho $data['C1']->load(), \"\\n\";\noci_free_descriptor($desc);\nvar_dump($desc);\necho \"\\nTest 3 - no preallocated descriptor\\n\";\n$s = oci_parse($c, \"SELECT C1 FROM lob_041_tab\");\noci_execute($s);\n$data = oci_fetch_assoc($s);\n$s = null;\necho $data['C1']->load(), \"\\n\";\nvar_dump($data);\n// Cleanup\necho \"Done\\n\";\n$stmtarray = array(\n    \"DROP table lob_041_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
