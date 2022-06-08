// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_characterset.phpt
  it("DRCP: oci_pconnect() and oci_connect() with different character sets", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/details.inc\";\n// Create connections with oci_connect and oci_pconnect with UTF8 as Charset\n$c1 = oci_connect($user,$password,$dbase,\"UTF8\");\nvar_dump($c1);\n// Now with oci_pconnect()\n$p1 = oci_pconnect($user,$password,$dbase,\"UTF8\");\nvar_dump($p1);\n// Create two more connections with character set US7ASCII\n$c2 = oci_connect($user,$password,$dbase,\"US7ASCII\");\nvar_dump($c2);\n// Now with oci_pconnect()\n$p2 = oci_pconnect($user,$password,$dbase,\"US7ASCII\");\nvar_dump($p2);\n// The two connections c1 and c2 should not share resources as they use different\n//character sets\nif((int)$c1 === (int)$c2)\n    echo \"First and third connections share a resource: NOT OK\\n\";\nelse\n    echo \"First and third  connections are different: OK\\n\";\n// The two connections p1 and p2 should not share resources as they use different\n//character sets\nif((int)$p1 === (int)$p2)\n    echo \"Second and fourth connections share a resource: NOT OK\\n\";\nelse\n    echo \"Second and fourth connections are different: OK\\n\";\n// Close all the connections\noci_close($c1);\noci_close($c2);\noci_close($p1);\noci_close($p2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
