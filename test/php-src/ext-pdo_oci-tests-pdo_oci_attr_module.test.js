// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_module.phpt
  it("PDO_OCI: Attribute: Setting session module", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$query = 'select module from v$session where sid = sys_context(\\'USERENV\\', \\'SID\\')';\n$dbh = PDOTest::factory();\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_MODULE, \"some module\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'MODULE SET: ';\nvar_dump($row['module']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_MODULE, \"something else!\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'MODULE RESET: ';\nvar_dump($row['module']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_MODULE, null));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'MODULE NULLED: ';\nvar_dump($row['module']);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
