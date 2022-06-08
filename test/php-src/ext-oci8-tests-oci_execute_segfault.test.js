// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/oci_execute_segfault.phpt
  it("oci_execute() segfault after repeated bind of LOB descriptor", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob, clob)\n                      VALUES (empty_blob(), empty_clob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$s = oci_parse($c, $ora_sql);\n$blob = oci_new_descriptor($c, OCI_D_LOB);\noci_bind_by_name($s, \":v_blob\", $blob, -1, OCI_B_BLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($blob->save(\"some binary data\"));\noci_bind_by_name($s, \":v_blob\", $blob, -1, OCI_B_BLOB);\noci_execute($s, OCI_DEFAULT);\nvar_dump($blob->save(\"some more binary data\"));\n$query = 'SELECT blob, DBMS_LOB.GETLENGTH(blob) FROM '.$schema.$table_name.' ORDER BY 2';\n$s = oci_parse ($c, $query);\noci_execute($s, OCI_DEFAULT);\nwhile ($arr = oci_fetch_assoc($s)) {\n    $result = $arr['BLOB']->load();\n    var_dump($result);\n}\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
