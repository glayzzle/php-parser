// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_pconn_close2.phpt
  it("DRCP: oci_pconnect() with oci_close() and oci8.old_oci_close_semantics OFF", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/details.inc\";\n// Test will open a persistent connection\n// Close the connection\n// Open another connection\n// With oci_close() the connection is released to the pool and hence the\n// the second connection will be different\necho \"This is with a OCI_PCONNECT\\n\";\nvar_dump($conn1 = oci_pconnect($user,$password,$dbase));\n$rn1 = (int)$conn1;\noci_close($conn1);\n// Query for the row updated. The new value should be returned\nvar_dump($conn2 = oci_pconnect($user,$password,$dbase));\n$rn2 = (int)$conn2;\noci_close($conn2);\n// Compare the resource numbers\nif ($rn1 === $rn2)\n    echo \"Both connections share a resource : NOT OK\\n\";\nelse\n    echo \"Both connections are different : OK\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
