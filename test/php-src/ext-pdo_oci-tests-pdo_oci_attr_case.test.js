// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_case.phpt
  it("PDO_OCI: Attribute: Column Case", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\nfunction do_query1($dbh)\n{\n    var_dump($dbh->getAttribute(PDO::ATTR_CASE));\n    $s = $dbh->prepare(\"select dummy from dual\");\n    $s->execute();\n    while ($r = $s->fetch(PDO::FETCH_ASSOC)) {\n        var_dump($r);\n    }\n}\nfunction do_query2($dbh, $mode)\n{\n    echo \"Mode desired is $mode\\n\";\n    $s = $dbh->prepare(\"select dummy from dual\", array(PDO::ATTR_CASE, $mode));\n    $s->execute();\n    while ($r = $s->fetch(PDO::FETCH_ASSOC)) {\n        var_dump($r);\n    }\n}\n$dbh = PDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\necho \"Test 1 - Force column names to lower case\\n\";\n$dbh->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);\ndo_query1($dbh);\necho \"Test 2 - Leave column names as returned by the database driver\\n\";\n$dbh->setAttribute(PDO::ATTR_CASE, PDO::CASE_NATURAL);\ndo_query1($dbh);\necho \"Test 3 - Force column names to upper case\\n\";\n$dbh->setAttribute(PDO::ATTR_CASE, PDO::CASE_UPPER);\ndo_query1($dbh);\necho \"Test 4 - Setting on statement has no effect.  Attempt lower case but get upper\\n\";\n$dbh->setAttribute(PDO::ATTR_CASE, PDO::CASE_NATURAL); // reset\ndo_query2($dbh, PDO::CASE_LOWER);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
