// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/default_prefetch2.phpt
  it("oci8.default_prefetch ini option", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table default_prefetch2_tab\",\n    \"create table default_prefetch2_tab (id number, value number)\",\n    \"insert into default_prefetch2_tab (id, value) values (1,1)\",\n    \"insert into default_prefetch2_tab (id, value) values (1,1)\",\n    \"insert into default_prefetch2_tab (id, value) values (1,1)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\n$select_sql = \"select * from default_prefetch2_tab\";\nif (!($s = oci_parse($c, $select_sql))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nvar_dump(oci_set_prefetch($s, 10));\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nvar_dump(oci_fetch($s));\nvar_dump(oci_num_rows($s));\n// Cleanup\n$stmtarray = array(\n    \"drop table default_prefetch2_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
