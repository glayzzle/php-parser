// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug43492_2.phpt
  it("Bug #43492 (Nested cursor leaks after related bug #44206 fixed)", function () {
    expect(parser.parseCode("<?php\n// This test is similar to bug43492.phpt without the explicit free.\n// Now that bug 44206 is fixed an automatic clean up will occur -\n// though it is still recommended in practice.\nrequire __DIR__.'/connect.inc';\n$stmtarray = array(\n    \"DROP table bug43492_tab\",\n    \"CREATE TABLE bug43492_tab(col1 VARCHAR2(1))\",\n    \"INSERT INTO bug43492_tab VALUES ('A')\",\n    \"INSERT INTO bug43492_tab VALUES ('B')\",\n    \"INSERT INTO bug43492_tab VALUES ('C')\",\n    \"INSERT INTO bug43492_tab VALUES ('D')\",\n    \"INSERT INTO bug43492_tab VALUES ('E')\",\n    \"INSERT INTO bug43492_tab VALUES ('F')\",\n    \"INSERT INTO bug43492_tab VALUES ('G')\",\n    \"INSERT INTO bug43492_tab VALUES ('H')\",\n    \"INSERT INTO bug43492_tab VALUES ('I')\",\n    \"INSERT INTO bug43492_tab VALUES ('J')\"\n);\noci8_test_sql_execute($c, $stmtarray);\nfunction fetch($c, $i) {\n    $s = oci_parse($c, 'select cursor(select * from bug43492_tab) c from bug43492_tab');\n    oci_execute($s, OCI_DEFAULT);\n    $result = oci_fetch_assoc($s);\n    oci_execute($result['C'], OCI_DEFAULT);\n    return $result['C'];\n}\nfor($i = 0; $i < 300; $i++) {\n    $cur = fetch($c, $i);\n    for($j = 0; $j < 10; $j++) {\n        $row = oci_fetch_row($cur);\n        echo \"$row[0] \";\n    }\n    echo \"\\n\";\n    oci_free_statement($cur);\n}\necho \"Done\\n\";\n// Cleanup\n$stmtarray = array(\n    \"DROP table bug43492_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
