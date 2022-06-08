// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_action.phpt
  it("PDO_OCI: Attribute: Setting session action", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$query = 'select action from v$session where sid = sys_context(\\'USERENV\\', \\'SID\\')';\n$dbh = PDOTest::factory();\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'ACTION NOT SET: ';\nvar_dump($row['action']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_ACTION, \"some action\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'ACTION SET: ';\nvar_dump($row['action']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_ACTION, \"something else!\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'ACTION RESET: ';\nvar_dump($row['action']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_ACTION, null));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'ACTION NULLED: ';\nvar_dump($row['action']);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
