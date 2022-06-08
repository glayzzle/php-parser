// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_012.phpt
  it("oci_lob_export()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob)\n                      VALUES (empty_blob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$statement = oci_parse($c,$ora_sql);\n$blob = oci_new_descriptor($c,OCI_D_LOB);\noci_bind_by_name($statement,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($statement, OCI_DEFAULT);\n$blob;\nvar_dump($blob->write(\"test string is here\\nnew string\"));\noci_commit($c);\n$select_sql = \"SELECT blob FROM \".$schema.$table_name.\" FOR UPDATE\";\n$s = oci_parse($c, $select_sql);\noci_execute($s, OCI_DEFAULT);\n$row = oci_fetch_array($s);\nvar_dump($row[0]->export(__DIR__.\"/lob_012.tmp\", 3, 10));\nvar_dump(file_get_contents(__DIR__.\"/lob_012.tmp\"));\n@unlink(__DIR__.\"/lob_012.tmp\");\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
