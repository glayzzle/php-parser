// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/define4.phpt
  it("oci_define_by_name() on partial number of columns", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table define4_tab\",\n    \"create table define4_tab (value number, string varchar(10))\",\n    \"insert into define4_tab (value, string) values (1234, 'some')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run test\n$stmt = oci_parse($c, \"select value, string from define4_tab\");\necho \"Test 1\\n\";\n// Only one of the two columns is defined\nvar_dump(oci_define_by_name($stmt, \"STRING\", $string));\noci_execute($stmt);\necho \"Test 2\\n\";\nwhile (oci_fetch($stmt)) {\n    var_dump(oci_result($stmt, 'VALUE'));\n    var_dump($string);\n    var_dump(oci_result($stmt, 'STRING'));\n    var_dump($string);\n    var_dump(oci_result($stmt, 'VALUE'));\n    var_dump(oci_result($stmt, 'STRING'));\n}\necho \"Test 3\\n\";\nvar_dump(oci_free_statement($stmt));\nvar_dump($string);\ntry {\n    var_dump(oci_result($stmt, 'STRING'));\n} catch(\\TypeError $exception) {\n    var_dump($exception->getMessage());\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table define4_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
