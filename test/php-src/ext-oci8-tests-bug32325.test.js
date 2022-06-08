// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug32325.phpt
  it("Bug #32325 (Cannot retrieve collection using OCI8)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialize\n$stmtarray = array(\n    \"create or replace type bug32325_t as table of number\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run test\n$collection = oci_new_collection($c, \"BUG32325_T\");\n$sql = \"begin\n        select bug32325_t(1,2,3,4) into :list from dual;\n        end;\";\n$stmt = oci_parse($c, $sql);\noci_bind_by_name($stmt, \":list\",  $collection, -1, OCI_B_NTY);\noci_execute($stmt);\nvar_dump($collection->size());\nvar_dump($collection->getelem(1));\nvar_dump($collection->getelem(2));\n// Cleanup\n$stmtarray = array(\n    \"drop type bug32325_t\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
