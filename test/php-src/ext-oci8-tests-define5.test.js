// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/define5.phpt
  it("oci_define_by_name() for statement re-execution", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table define5_tab\",\n    \"create table define5_tab (id number, string varchar(10))\",\n    \"insert into define5_tab (id, string) values (1, 'some')\",\n    \"insert into define5_tab (id, string) values (2, 'thing')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run test\necho \"Test 1 - must do define before execute\\n\";\n$stmt = oci_parse($c, \"select string from define5_tab where id = 1\");\noci_execute($stmt);\nvar_dump(oci_define_by_name($stmt, \"STRING\", $string));\nwhile (oci_fetch($stmt)) {\n    var_dump($string);  // gives NULL\n    var_dump(oci_result($stmt, 'STRING'));\n}\necho \"Test 2 - normal define order\\n\";\n$stmt = oci_parse($c, \"select string from define5_tab where id = 1\");\nvar_dump(oci_define_by_name($stmt, \"STRING\", $string));\noci_execute($stmt);\nwhile (oci_fetch($stmt)) {\n    var_dump($string);\n}\necho \"Test 3 - no new define done\\n\";\n$stmt = oci_parse($c, \"select string from define5_tab where id = 2\");\noci_execute($stmt);\nwhile (oci_fetch($stmt)) {\n    var_dump($string); // not updated with new value\n    var_dump(oci_result($stmt, 'STRING'));\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table define5_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
