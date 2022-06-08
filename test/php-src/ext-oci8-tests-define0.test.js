// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/define0.phpt
  it("oci_define_by_name()", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table define0_tab\",\n    \"create table define0_tab (string varchar(10))\",\n    \"insert into define0_tab (string) values ('some')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run test\n$stmt = oci_parse($c, \"select string from define0_tab\");\n/* the define MUST be done BEFORE ociexecute! */\necho \"Test 1\\n\";\n$string = '';\noci_define_by_name($stmt, \"STRING\", $string, 20);\noci_execute($stmt);\nwhile (oci_fetch($stmt)) {\n    var_dump($string);\n}\necho \"Test 2\\n\";\n$string = '';\n$s2 = oci_parse($c, 'select string from define0_tab');\noci_define_by_name($s2, 'STRING', $string);\noci_execute($s2);\nwhile (oci_fetch($s2)) {\n    var_dump($string);\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table define0_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
