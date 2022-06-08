// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/cursors.phpt
  it("fetching cursor from a statement", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_table.inc\";\n$insert_sql = \"INSERT INTO \".$schema.$table_name.\" (id, value) VALUES (1,1)\";\nif (!($s = oci_parse($c, $insert_sql))) {\n    die(\"oci_parse(insert) failed!\\n\");\n}\nfor ($i = 0; $i<3; $i++) {\n    if (!oci_execute($s)) {\n        die(\"oci_execute(insert) failed!\\n\");\n    }\n}\nif (!oci_commit($c)) {\n    die(\"oci_commit() failed!\\n\");\n}\n$sql = \"select CURSOR(select * from \".$schema.$table_name.\") as curs FROM dual\";\n$stmt = oci_parse($c, $sql);\noci_execute($stmt);\nwhile ($data = oci_fetch_assoc($stmt)) {\n    oci_execute($data[\"CURS\"]);\n    $subdata = oci_fetch_assoc($data[\"CURS\"]);\n    var_dump($subdata);\n    var_dump(oci_cancel($data[\"CURS\"]));\n    $subdata = oci_fetch_assoc($data[\"CURS\"]);\n    var_dump($subdata);\n    var_dump(oci_cancel($data[\"CURS\"]));\n}\nrequire __DIR__.\"/drop_table.inc\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
