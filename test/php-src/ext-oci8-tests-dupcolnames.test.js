// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/dupcolnames.phpt
  it("SELECT tests with duplicate column anmes", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table dupcolnames_tab1\",\n    \"drop table dupcolnames_tab2\",\n    \"create table dupcolnames_tab1 (c1 number, dupnamecol varchar2(20))\",\n    \"create table dupcolnames_tab2 (c2 number, dupnamecol varchar2(20))\",\n    \"insert into dupcolnames_tab1 (c1, dupnamecol) values (1, 'chris')\",\n    \"insert into dupcolnames_tab2 (c2, dupnamecol) values (2, 'jones')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1 - OCI_ASSOC\\n\";\n$s = oci_parse($c, \"select * from dupcolnames_tab1, dupcolnames_tab2\");\noci_execute($s);\nwhile (($r = oci_fetch_array($s, OCI_ASSOC)) != false) {\n    var_dump($r);\n}\necho \"\\nTest 2 - OCI_NUM\\n\";\n$s = oci_parse($c, \"select * from dupcolnames_tab1, dupcolnames_tab2\");\noci_execute($s);\nwhile (($r = oci_fetch_array($s, OCI_NUM)) != false) {\n    var_dump($r);\n}\necho \"\\nTest 3 - OCI_ASSOC+OCI_NUM\\n\";\n$s = oci_parse($c, \"select * from dupcolnames_tab1, dupcolnames_tab2\");\noci_execute($s);\nwhile (($r = oci_fetch_array($s, OCI_ASSOC+OCI_NUM)) != false) {\n    var_dump($r);\n}\n// Clean up\n$stmtarray = array(\n    \"drop table dupcolnames_tab1\",\n    \"drop table dupcolnames_tab2\",\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
