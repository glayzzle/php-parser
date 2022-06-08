// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error_bind_2.phpt
  it("Test some more oci_bind_by_name error conditions", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table error_bind_2_tab\",\n    \"create table error_bind_2_tab(name varchar(10))\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Test 1 - SQLT_BOL\\n\";\nunset($name);\n$stmt = oci_parse($c, \"insert into error_bind_2_tab values (:name)\");\noci_bind_by_name($stmt, \":name\", $name, -1, SQLT_BOL);\n$name=$c;\nvar_dump(oci_execute($stmt));\necho \"Test 2 - SQLT_BOL\\n\";\nunset($name);\n$stmt = oci_parse($c, \"insert into error_bind_2_tab values (:name)\");\n$name=$c;\noci_bind_by_name($stmt, \":name\", $name, -1, SQLT_BOL);\n// Clean up\n$stmtarray = array(\n    \"drop table error_bind_2_tab\",\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
