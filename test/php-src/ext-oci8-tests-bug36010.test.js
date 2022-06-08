// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug36010.phpt
  it("Bug #36010 (Crash when executing SQL statement with lob parameter twice)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nfunction f($conn)\n{\n    $sql =  \"begin :p_clob := 'lob string'; end;\";\n    $stid = oci_parse($conn, $sql);\n    $clob = oci_new_descriptor($conn, OCI_D_LOB);\n    oci_bind_by_name($stid, \":p_clob\", $clob, -1, OCI_B_CLOB);\n    $r = oci_execute($stid, OCI_DEFAULT);\n}\nf($c);\nf($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
