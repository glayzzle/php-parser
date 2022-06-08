// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/connect_scope2.phpt
  it("Test oci_pconnect end-of-scope when statement returned", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/details.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table connect_scope2_tab\",\n    \"create table connect_scope2_tab (c1 number)\",\n);\nif (!empty($dbase))\n    $c1 = oci_new_connect($user,$password,$dbase);\nelse\n    $c1 = oci_new_connect($user,$password);\noci8_test_sql_execute($c1, $stmtarray);\n// Run Test\necho \"Test 1 - oci_pconnect\\n\";\nfunction f()\n{\n    global $user, $password, $dbase;\n    if (!empty($dbase))\n        $c = oci_pconnect($user,$password,$dbase);\n    else\n        $c = oci_pconnect($user,$password);\n    $s = oci_parse($c, \"insert into connect_scope2_tab values (1)\");\n    oci_execute($s, OCI_DEFAULT);  // no commit\n    return($s); // this keeps the connection refcount positive so the connection isn't closed\n}\n$s2 = f();\n// Check nothing committed yet\n$s1 = oci_parse($c1, \"select * from connect_scope2_tab\");\noci_execute($s1, OCI_DEFAULT);\noci_fetch_all($s1, $r);\nvar_dump($r);\n// insert 2nd row on returned statement, committing both rows\noci_execute($s2);\n// Verify data was committed\n$s1 = oci_parse($c1, \"select * from connect_scope2_tab\");\noci_execute($s1);\noci_fetch_all($s1, $r);\nvar_dump($r);\n// Cleanup\n$stmtarray = array(\n    \"drop table connect_scope2_tab\"\n);\noci8_test_sql_execute($c1, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
