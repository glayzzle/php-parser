// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/checkliveness.phpt
  it("PDO OCI checkliveness (code coverage)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_oci/tests/common.phpt');\n$dsn = getenv('PDOTEST_DSN');\n$user = getenv('PDOTEST_USER');\n$pass = getenv('PDOTEST_PASS');\n$attr = getenv('PDOTEST_ATTR');\ntry {\n    $db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));\n}\ncatch (PDOException $e) {\n    echo 'Connection failed: ' . $e->getMessage();\n    exit;\n}\n// This triggers the call to check liveness\ntry {\n    $db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));\n}\ncatch (PDOException $e) {\n    echo 'Connection failed: ' . $e->getMessage();\n    exit;\n}\n$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);\ntry {\n    $stmt = $db->prepare('SELECT * FROM dual');\n    $stmt->execute();\n    $row = $stmt->fetch();\n    var_dump($row);\n} catch (PDOException $e) {\n    print $e->getMessage();\n}\n$db = null;\n?>")).toMatchSnapshot();
  });
});
