// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/bug41996.phpt
  it("PDO OCI Bug #41996 (Problem accessing Oracle ROWID)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_oci/tests/common.phpt');\n$stmt = $db->prepare('SELECT rowid FROM dual');\n$stmt->execute();\n$row = $stmt->fetch();\nvar_dump(strlen($row[0]) > 0);\n?>")).toMatchSnapshot();
  });
});
