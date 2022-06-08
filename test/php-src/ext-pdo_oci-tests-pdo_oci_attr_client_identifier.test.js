// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_client_identifier.phpt
  it("PDO_OCI: Attribute: Setting session client identifier", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$query = 'select client_identifier from v$session where sid = sys_context(\\'USERENV\\', \\'SID\\')';\n$dbh = PDOTest::factory();\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_IDENTIFIER NOT SET: ';\nvar_dump($row['client_identifier']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_CLIENT_IDENTIFIER, \"some client identifier\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_IDENTIFIER SET: ';\nvar_dump($row['client_identifier']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_CLIENT_IDENTIFIER, \"something else!\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_IDENTIFIER RESET: ';\nvar_dump($row['client_identifier']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_CLIENT_IDENTIFIER, null));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_IDENTIFIER NULLED: ';\nvar_dump($row['client_identifier']);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
