// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_025.phpt
  it("oci_lob_read() tests", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob)\n                      VALUES (empty_blob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$statement = oci_parse($c,$ora_sql);\n$blob = oci_new_descriptor($c,OCI_D_LOB);\noci_bind_by_name($statement,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($statement, OCI_DEFAULT);\nvar_dump($blob->size());\nvar_dump($blob->write(str_repeat(\"string.\", 1000)));\nvar_dump($blob->size());\noci_commit($c);\n$select_sql = \"SELECT blob FROM \".$schema.$table_name.\" FOR UPDATE\";\n$s = oci_parse($c, $select_sql);\noci_execute($s, OCI_DEFAULT);\nvar_dump($row = oci_fetch_array($s));\nvar_dump(oci_lob_read($row[0], 2));\nvar_dump(oci_lob_eof($row[0]));\nunset($row[0]->descriptor);\nvar_dump(oci_lob_read($row[0],1));\nvar_dump(oci_lob_eof($row[0]));\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
