// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_all1.phpt
  it("oci_fetch_all()", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table fetch_all_tab\",\n    \"create table fetch_all_tab (id number, value number)\",\n    \"insert into fetch_all_tab (id, value) values (1,1)\",\n    \"insert into fetch_all_tab (id, value) values (1,1)\",\n    \"insert into fetch_all_tab (id, value) values (1,1)\"\n);\noci8_test_sql_execute($c, $stmtarray);\nif (!($s = oci_parse($c, \"select * from fetch_all_tab\"))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\n/* oci_fetch_all */\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nvar_dump(oci_fetch_all($s, $all));\nvar_dump($all);\n// Cleanup\n$stmtarray = array(\n    \"drop table fetch_all_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
