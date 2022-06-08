// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/field_funcs1.phpt
  it("oci_field_*() family: error cases", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table field_funcs1_tab\",\n    \"create table field_funcs1_tab (id number, value number)\",\n    \"insert into field_funcs1_tab (id, value) values (1,1)\",\n    \"insert into field_funcs1_tab (id, value) values (1,1)\",\n    \"insert into field_funcs1_tab (id, value) values (1,1)\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\nif (!($s = oci_parse($c, \"select * from field_funcs1_tab\"))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\n$row = oci_fetch_array($s, OCI_NUM + OCI_RETURN_NULLS + OCI_RETURN_LOBS);\nvar_dump($row);\necho \"Test 1\\n\";\nvar_dump(oci_field_is_null($s, -1));\nvar_dump(oci_field_name($s, -1));\nvar_dump(oci_field_type($s, -1));\nvar_dump(oci_field_type_raw($s, -1));\nvar_dump(oci_field_scale($s, -1));\nvar_dump(oci_field_precision($s, -1));\nvar_dump(oci_field_size($s, -1));\necho \"Test 2\\n\";\nvar_dump(oci_field_is_null($s, \"none\"));\nvar_dump(oci_field_name($s, \"none\"));\nvar_dump(oci_field_type($s, \"none\"));\nvar_dump(oci_field_type_raw($s, \"none\"));\nvar_dump(oci_field_scale($s, \"none\"));\nvar_dump(oci_field_precision($s, \"none\"));\nvar_dump(oci_field_size($s, \"none\"));\n// Cleanup\n$stmtarray = array(\n    \"drop table field_funcs1_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
