// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/commit_002.phpt
  it("Test oci_commit failure", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table commit_002_tab\",\n    \"create table commit_002_tab\n     ( x int constraint commit_002_tab_check_x check ( x > 0 ) deferrable initially immediate,\n       y int constraint commit_002_tab_check_y check ( y > 0 ) deferrable initially deferred)\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"First Insert\\n\";\n$s = oci_parse($c, \"insert into commit_002_tab values (-1, 1)\");\n$r = @oci_execute($s, OCI_DEFAULT);\nif (!$r) {\n    $m = oci_error($s);\n    echo 'Could not execute: '. $m['message'] . \"\\n\";\n}\n$r = oci_commit($c);\nif (!$r) {\n    $m = oci_error($c);\n    echo 'Could not commit: '. $m['message'] . \"\\n\";\n}\necho \"Second Insert\\n\";\n$s = oci_parse($c, \"insert into commit_002_tab values (1, -1)\");\n$r = @oci_execute($s, OCI_NO_AUTO_COMMIT);\nif (!$r) {\n    $m = oci_error($s);\n    echo 'Could not execute: '. $m['message'] . \"\\n\";\n}\n$r = oci_commit($c);\nif (!$r) {\n    $m = oci_error($c);\n    echo 'Could not commit: '. $m['message'] . \"\\n\";\n}\n// Clean up\n$stmtarray = array(\n    \"drop table commit_002_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
