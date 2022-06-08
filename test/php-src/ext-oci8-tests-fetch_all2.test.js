// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_all2.phpt
  it("oci_fetch_all() - 2", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.'/create_table.inc';\n$insert_sql = \"INSERT INTO \".$schema.\"\".$table_name.\" (id, value) VALUES (1,1)\";\n$s = oci_parse($c, $insert_sql);\nfor ($i = 0; $i<3; $i++) {\n    oci_execute($s);\n}\noci_commit($c);\n$select_sql = \"SELECT * FROM \".$schema.\"\".$table_name.\"\";\n$s = oci_parse($c, $select_sql);\noci_execute($s);\nvar_dump(oci_fetch_all($s, $all));\nvar_dump($all);\noci_execute($s);\nvar_dump(oci_fetch_all($s, $all, 0, 10, OCI_FETCHSTATEMENT_BY_ROW));\nvar_dump($all);\noci_execute($s);\nvar_dump(oci_fetch_all($s, $all, -1, -1, OCI_FETCHSTATEMENT_BY_ROW));\nvar_dump($all);\noci_execute($s);\nvar_dump(oci_fetch_all($s, $all, 0, 2, OCI_FETCHSTATEMENT_BY_ROW+OCI_NUM));\nvar_dump($all);\noci_execute($s);\nvar_dump(oci_fetch_all($s, $all, 0, 2, OCI_NUM));\nvar_dump($all);\noci_execute($s);\nvar_dump(oci_fetch_all($s, $all, 0, 1, OCI_BOTH));\nvar_dump($all);\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
