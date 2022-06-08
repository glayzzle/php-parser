// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_037.phpt
  it("Fetching two different lobs and using them after fetch", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n/* insert the first LOB */\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob)\n                      VALUES (empty_blob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$s = oci_parse($c,$ora_sql);\n$blob = oci_new_descriptor($c,OCI_DTYPE_LOB);\noci_bind_by_name($s,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($blob->write(\"first lob data\"));\noci_commit($c);\n/* insert the second LOB */\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob)\n                      VALUES (empty_blob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$s = oci_parse($c,$ora_sql);\n$blob = oci_new_descriptor($c,OCI_DTYPE_LOB);\noci_bind_by_name($s,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($blob->write(\"second lob data\"));\noci_commit($c);\n/* select both */\n$ora_sql = \"SELECT blob FROM \".$schema.$table_name;\n$s = oci_parse($c,$ora_sql);\noci_execute($s, OCI_DEFAULT);\n$rows = array();\n$rows[0] = oci_fetch_assoc($s);\n$rows[1] = oci_fetch_assoc($s);\nvar_dump($rows[0]['BLOB']->read(1000));\nvar_dump($rows[1]['BLOB']->read(1000));\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
