// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_newconnect.phpt
  it("DRCP: oci_new_connect()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/details.inc\";\n// Open two connections with oci_new_connect\n// Verify they are different by comparing the resource ids\nvar_dump($c1 = oci_new_connect($user,$password,$dbase));\n$rn1 = (int)$c1;\n// Another connection now\nvar_dump($c2 = oci_new_connect($user,$password,$dbase));\n$rn2 = (int)$c2;\n// rn1 and rn2 should be different.\nif ($rn1 === $rn2)\n    echo \"First and second connections share a resource: Not OK\\n\";\nelse\n    echo \"First and second connections are different  OK\\n\";\n// Close the connections\noci_close($c1);\noci_close($c2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
