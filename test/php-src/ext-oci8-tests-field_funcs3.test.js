// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/field_funcs3.phpt
  it("oci_field_*() family: basic column types", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialization\n$stmtarray = array(\n    \"drop table field_funcs3_tab\",\n    \"create table field_funcs3_tab(c1_c char(2), c2_v varchar2(2), c3_n number, c4_d date)\",\n    \"insert into field_funcs3_tab values ('c1', 'c2', 3, '01-Jan-2010')\"\n);\n$v = oci_server_version($c);\nif (strpos($v, 'Oracle TimesTen') === false) {\n    oci8_test_sql_execute($c, array(\"alter session set nls_date_format = 'DD-MON-YYYY'\"));\n}\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\n$select_sql = \"select * from field_funcs3_tab\";\nif (!($s = oci_parse($c, $select_sql))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\n$row = oci_fetch_array($s, OCI_NUM + OCI_RETURN_NULLS + OCI_RETURN_LOBS);\nvar_dump($row);\nforeach ($row as $num => $field) {\n    $num++;\n    var_dump(oci_field_is_null($s, $num));\n    var_dump(oci_field_name($s, $num));\n    var_dump(oci_field_type($s, $num));\n    var_dump(oci_field_type_raw($s, $num));\n    var_dump(oci_field_scale($s, $num));\n    var_dump(oci_field_precision($s, $num));\n    var_dump(oci_field_size($s, $num));\n}\n// Clean up\n$stmtarray = array(\n    \"drop table field_funcs3_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
