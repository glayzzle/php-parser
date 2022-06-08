// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_41997.phpt
  it("PDO MySQL Bug #41997 (stored procedure call returning single rowset blocks future queries)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/mysql_pdo_test.inc';\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n$db->exec('DROP PROCEDURE IF EXISTS p');\n$db->exec('CREATE PROCEDURE p() BEGIN SELECT 1 AS \"one\"; END');\n$stmt = $db->query(\"CALL p()\");\ndo {\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n} while ($stmt->nextRowset());\nvar_dump($stmt->errorInfo());\n$stmt = $db->query('SELECT 2 AS \"two\"');\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\nvar_dump($stmt->errorInfo());\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
