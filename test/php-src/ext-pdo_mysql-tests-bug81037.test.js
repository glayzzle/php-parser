// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug81037.phpt
  it("Bug #81037 PDO discards error message text from prepared statement", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\nMySQLPDOTest::createTestTable($pdo);\n$sql = \"SELECT id FROM test WHERE label = :par\";\n$stmt = $pdo->prepare($sql);\ntry {\n    $stmt->execute();\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$data = $stmt->fetchAll(PDO::FETCH_ASSOC);\n?>")).toMatchSnapshot();
  });
});
