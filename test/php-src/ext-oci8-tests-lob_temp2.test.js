// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_temp2.phpt
  it("Writing temporary lob before binding", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\nrequire(__DIR__.'/create_table.inc');\n$ora_sql = \"INSERT INTO \".$schema.$table_name.\" (clob) VALUES (:v_clob)\";\n$clob = oci_new_descriptor($c, OCI_D_LOB);\nvar_dump($clob->writeTemporary(\"test\"));\n$statement = oci_parse($c, $ora_sql);\noci_bind_by_name($statement, \":v_clob\", $clob, -1, OCI_B_CLOB);\noci_execute($statement, OCI_DEFAULT);\n$s = oci_parse($c, \"select clob from \". $schema.$table_name);\noci_execute($s);\noci_fetch_all($s, $res);\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
