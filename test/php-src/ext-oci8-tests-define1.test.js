// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/define1.phpt
  it("oci_define_by_name()", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table define1_tab\",\n    \"create table define1_tab (string varchar(10))\",\n    \"insert into define1_tab (string) values ('some')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run test\n$stmt = oci_parse($c, \"select string from define1_tab\");\n/* the define MUST be done BEFORE ociexecute! */\n$string = '';\nvar_dump(oci_define_by_name($stmt, \"STRING\", $string, 20));\nvar_dump(oci_define_by_name($stmt, \"STRING\", $string, 20));\ntry {\n    var_dump(oci_define_by_name($stmt, \"\", $string, 20));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\noci_execute($stmt);\nwhile (oci_fetch($stmt)) {\n    var_dump($string);\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table define1_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
