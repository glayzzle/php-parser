// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_pconn_close1.phpt
  it("DRCP: oci_pconnect() with oci_close() and oci8.old_oci_close_semantics ON", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/details.inc\";\n// Test will open a persistent connection\n// Close the connection\n// Open another connection\n// With oci_close() being a no-op, the same connection will be returned\necho \"This is with a OCI_PCONNECT\\n\";\nvar_dump($conn1 = oci_pconnect($user,$password,$dbase));\n$rn1 = (int)$conn1;\noci_close($conn1);\n//  Open another connection\nvar_dump($conn2 = oci_pconnect($user,$password,$dbase));\n$rn2 = (int)$conn2;\noci_close($conn2);\n// Compare the resource numbers\nif ($rn1 === $rn2)\n    echo \"Both connections share a resource : OK\\n\";\nelse\n    echo \"Both connections are different : NOT OK\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
