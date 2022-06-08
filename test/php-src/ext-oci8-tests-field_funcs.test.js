// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/field_funcs.phpt
  it("oci_field_*() family", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.'/create_table.inc';\n$insert_sql = \"INSERT INTO \".$schema.\"\".$table_name.\" (id, value) VALUES (1,1)\";\nif (!($s = oci_parse($c, $insert_sql))) {\n    die(\"oci_parse(insert) failed!\\n\");\n}\nfor ($i = 0; $i<3; $i++) {\n    if (!oci_execute($s)) {\n        die(\"oci_execute(insert) failed!\\n\");\n    }\n}\nif (!oci_commit($c)) {\n    die(\"oci_commit() failed!\\n\");\n}\n$select_sql = \"SELECT * FROM \".$schema.\"\".$table_name.\"\";\nif (!($s = oci_parse($c, $select_sql))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\n$row = oci_fetch_array($s, OCI_NUM + OCI_RETURN_NULLS + OCI_RETURN_LOBS);\nvar_dump($row);\nforeach ($row as $num => $field) {\n    $num++;\n    var_dump(oci_field_is_null($s, $num));\n    var_dump(oci_field_name($s, $num));\n    var_dump(oci_field_type($s, $num));\n    var_dump(oci_field_type_raw($s, $num));\n    var_dump(oci_field_scale($s, $num));\n    var_dump(oci_field_precision($s, $num));\n    var_dump(oci_field_size($s, $num));\n}\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
