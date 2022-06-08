// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_prefetch_2.phpt
  it("PDO_OCI: Attribute: prefetch on statements", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$dbh = PDOTest::factory();\n$s = $dbh->prepare(\"select '' as myempty, null as mynull from dual\", array(PDO::ATTR_PREFETCH => 101));\necho \"Test 1: Can't set prefetch after prepare\\n\";\nvar_dump($s->setAttribute(PDO::ATTR_PREFETCH, 102));\n// Verify can fetch\n$s = $dbh->prepare(\"select dummy from dual\" );\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo $r[0] . \"\\n\";\n}\necho \"Test 2: Turn off prefetching\\n\";\n$s = $dbh->prepare(\"select '' as myempty, null as mynull from dual\", array(PDO::ATTR_PREFETCH => 0));\n$s = $dbh->prepare(\"select dummy from dual\" );\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo $r[0] . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
