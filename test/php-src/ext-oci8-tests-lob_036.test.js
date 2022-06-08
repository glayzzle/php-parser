// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_036.phpt
  it("Exercise cleanup code when LOB buffering is on", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob)\n                      VALUES (empty_blob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$s = oci_parse($c,$ora_sql);\n$blob = oci_new_descriptor($c,OCI_DTYPE_LOB);\noci_bind_by_name($s,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($blob->write(\"test\"));\nvar_dump($blob->setBuffering(true));\nvar_dump($blob->write(\"test\"));\n$blob = null;\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
