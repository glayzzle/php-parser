// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_prefetch_1.phpt
  it("PDO_OCI: Attribute: Set prefetch on connection", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$dbh = PDOTest::factory();\necho \"Test connect\\n\";\nputenv('PDOTEST_ATTR='.serialize(array(PDO::ATTR_PREFETCH=>101)));\n$dbh = PDOTest::factory();\necho $dbh->getAttribute(PDO::ATTR_PREFETCH), \"\\n\";\n// Verify can fetch\n$s = $dbh->prepare(\"select dummy from dual\" );\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo $r[0] . \"\\n\";\n}\necho \"Test set 102\\n\";\n$dbh->setAttribute(PDO::ATTR_PREFETCH, 102);\necho $dbh->getAttribute(PDO::ATTR_PREFETCH), \"\\n\";\n// Verify can fetch\n$s = $dbh->prepare(\"select dummy from dual\" );\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo $r[0] . \"\\n\";\n}\necho \"Test set -1: (Uses 0)\\n\";\n$dbh->setAttribute(PDO::ATTR_PREFETCH, -1);\necho $dbh->getAttribute(PDO::ATTR_PREFETCH), \"\\n\";\n// Verify can fetch\n$s = $dbh->prepare(\"select dummy from dual\" );\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo $r[0] . \"\\n\";\n}\necho \"Test set PHP_INT_MAX: (Uses default)\\n\";\n$dbh->setAttribute(PDO::ATTR_PREFETCH, PHP_INT_MAX);\necho $dbh->getAttribute(PDO::ATTR_PREFETCH), \"\\n\";\n// Verify can fetch\n$s = $dbh->prepare(\"select dummy from dual\" );\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo $r[0] . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
