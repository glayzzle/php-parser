// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/bug44301.phpt
  it("PDO OCI Bug #44301 (Segfault when an exception is thrown on persistent connections)", function () {
    expect(parser.parseCode("<?php\nputenv(\"PDO_OCI_TEST_ATTR=\" . serialize(array(PDO::ATTR_PERSISTENT => true)));\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_oci/tests/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\ntry {\n    $stmt = $db->prepare('SELECT * FROM no_table');\n    $stmt->execute();\n} catch (PDOException $e) {\n    print $e->getMessage();\n}\n$db = null;\n?>")).toMatchSnapshot();
  });
});
