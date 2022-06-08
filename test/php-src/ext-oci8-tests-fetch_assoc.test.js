// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_assoc.phpt
  it("oci_fetch_assoc()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$stmtarray = array(\n    \"drop table fetch_assoc_tab\",\n    \"create table fetch_assoc_tab (id number, value number, dummy varchar2(20))\",\n    \"insert into fetch_assoc_tab values (1,1,null)\",\n    \"insert into fetch_assoc_tab values (1,1,null)\",\n    \"insert into fetch_assoc_tab values (1,1,null)\"\n);\noci8_test_sql_execute($c, $stmtarray);\n$select_sql = \"select * from fetch_assoc_tab\";\nif (!($s = oci_parse($c, $select_sql))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nwhile ($row = oci_fetch_assoc($s)) {\n    var_dump($row);\n}\n// Clean up\n$stmtarray = array(\n    \"drop table fetch_assoc_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
