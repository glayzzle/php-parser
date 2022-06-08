// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_nulls_1.phpt
  it("PDO_OCI: Attribute: Oracle Nulls", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\nfunction do_query($dbh)\n{\n    var_dump($dbh->getAttribute(PDO::ATTR_ORACLE_NULLS));\n    $s = $dbh->prepare(\"select '' as myempty, null as mynull from dual\");\n    $s->execute();\n    while ($r = $s->fetch()) {\n        var_dump($r[0]);\n        var_dump($r[1]);\n    }\n}\n$dbh = PDOTest::factory();\nprint \"PDO::ATTR_ORACLE_NULLS: Default: \";\ndo_query($dbh);\nprint \"PDO::ATTR_ORACLE_NULLS: PDO::NULL_NATURAL: \";\n$dbh->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_NATURAL); // No conversion.\ndo_query($dbh);\nprint \"PDO::ATTR_ORACLE_NULLS: PDO::NULL_EMPTY_STRING: \";\n$dbh->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING); // Empty string is converted to NULL.\ndo_query($dbh);\nprint \"PDO::ATTR_ORACLE_NULLS: PDO::NULL_TO_STRING: \";\n$dbh->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_TO_STRING); // NULL is converted to an empty string.\ndo_query($dbh);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
