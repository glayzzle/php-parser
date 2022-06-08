// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch.phpt
  it("ocifetch() & ociresult()", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table fetch_tab\",\n    \"create table fetch_tab (id number, value number)\",\n    \"insert into fetch_tab (id, value) values (1,1)\",\n    \"insert into fetch_tab (id, value) values (1,1)\",\n    \"insert into fetch_tab (id, value) values (1,1)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\nif (!($s = oci_parse($c, \"select * from fetch_tab\"))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nwhile(oci_fetch($s)) {\n        $row = oci_result($s, 1);\n        $row1 = oci_result($s, 2);\n        var_dump($row);\n        var_dump($row1);\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table fetch_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
