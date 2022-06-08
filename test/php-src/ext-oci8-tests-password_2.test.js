// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/password_2.phpt
  it("oci_password_change() for persistent connections", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n$stmtarray = array(\n    \"drop user testuser_pw2 cascade\",\n    \"create user testuser_pw2 identified by testuserpwd\",\n    \"grant connect, create session to testuser_pw2\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Connect (persistent) and change the password\n$c1 = oci_pconnect(\"testuser_pw2\", \"testuserpwd\", $dbase);\nvar_dump($c1);\n$rn1 = (int)$c1;\noci_password_change($c1, \"testuser_pw2\", \"testuserpwd\", \"testuserpwd2\");\n// Second connect should return a new resource because the hash string will be different from $c1\n$c2 = oci_pconnect(\"testuser_pw2\", \"testuserpwd2\", $dbase);\nvar_dump($c2);\n$rn2 = (int)$c2;\n// Despite using the old password this connect should succeed and return the original resource\n$c3 = oci_pconnect(\"testuser_pw2\", \"testuserpwd\", $dbase);\nvar_dump($c3);\n$rn3 = (int)$c3;\n// Connections should differ\nif ($rn1 == $rn2) {\n    echo \"First and second connections share a resource: Not OK\\n\";\n    var_dump($c1);\n}\nelse {\n    echo \"First and second connections are different: OK\\n\";\n}\n// Connections should be the same\nif ($rn1 == $rn3) {\n    echo \"First and third connections share a resource: OK\\n\";\n}\nelse {\n    echo \"First and third connections are different: Not OK\\n\";\n    var_dump($c1);\n    var_dump($c2);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
