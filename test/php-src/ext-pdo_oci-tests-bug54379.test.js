// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/bug54379.phpt
  it("Bug #54379 (PDO_OCI: UTF-8 output gets truncated)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_oci/tests/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\ntry {\n        $db->exec(\"DROP TABLE test\");\n} catch (Exception $e) {\n}\n$db->exec(\"CREATE TABLE test (col1 NVARCHAR2(20))\");\n$db->exec(\"INSERT INTO test VALUES('12345678901234567890')\");\n$db->exec(\"INSERT INTO test VALUES('あいうえおかきくけこさしすせそたちつてと')\");\n$stmt = $db->prepare(\"SELECT * FROM test\");\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n$db->exec(\"DROP TABLE test\");\n?>")).toMatchSnapshot();
  });
});
