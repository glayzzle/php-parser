// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_client_info.phpt
  it("PDO_OCI: Attribute: Setting session client info", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$query = 'select client_info from v$session where sid = sys_context(\\'USERENV\\', \\'SID\\')';\n$dbh = PDOTest::factory();\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_INFO NOT SET: ';\nvar_dump($row['client_info']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_CLIENT_INFO, \"some client info\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_INFO SET: ';\nvar_dump($row['client_info']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_CLIENT_INFO, \"something else!\"));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_INFO RESET: ';\nvar_dump($row['client_info']);\nvar_dump($dbh->setAttribute(PDO::OCI_ATTR_CLIENT_INFO, null));\n$stmt = $dbh->query($query);\n$row = $stmt->fetch();\necho 'CLIENT_INFO NULLED: ';\nvar_dump($row['client_info']);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
