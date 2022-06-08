// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_038.phpt
  it("PDOStatement::fetchColumn() invalid column index", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\nfunction fetchColumn($stmt, $index) {\n    $stmt->execute();\n    return $stmt->fetchColumn($index);\n}\n$conn  = PDOTest::factory();\n$query = 'SELECT 1';\nswitch ($conn->getAttribute(PDO::ATTR_DRIVER_NAME)) {\n    case 'oci':\n        $query .= ' FROM DUAL';\n        break;\n    case 'firebird':\n        $query .= ' FROM RDB$DATABASE';\n        break;\n}\n$stmt = $conn->prepare($query);\ntry {\n    var_dump(fetchColumn($stmt, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\nvar_dump(fetchColumn($stmt, 0));\ntry {\n    var_dump(fetchColumn($stmt, 1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
