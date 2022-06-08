// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/define.phpt
  it("oci_define_by_name()", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table define_tab\",\n    \"create table define_tab (string varchar(10))\",\n    \"insert into define_tab (string) values ('some')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run test\n$stmt = oci_parse($c, \"select string from define_tab\");\n/* the define MUST be done BEFORE ociexecute! */\n$string = '';\noci_define_by_name($stmt, \"STRING\", $string, 20);\noci_execute($stmt);\nwhile (oci_fetch($stmt)) {\n    var_dump($string);\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table define_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
