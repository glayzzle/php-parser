// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_65946.phpt
  it("PDO Common: Bug #65946 (pdo_sql_parser.c permanently converts values bound to strings)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$db->exec('CREATE TABLE test(id int)');\n$db->exec('INSERT INTO test VALUES(1)');\nswitch ($db->getAttribute(PDO::ATTR_DRIVER_NAME)) {\n    case 'dblib':\n        $sql = 'SELECT TOP :limit * FROM test';\n        break;\n    case 'odbc':\n        $sql = 'SELECT TOP (:limit) * FROM test';\n        break;\n    case 'firebird':\n        $sql = 'SELECT FIRST :limit * FROM test';\n        break;\n    case 'oci':\n        //$sql = 'SELECT * FROM test FETCH FIRST :limit ROWS ONLY';  // Oracle 12c syntax\n        $sql = \"select id from (select a.*, rownum rnum from (SELECT * FROM test) a where rownum <= :limit)\";\n        break;\n    default:\n        $sql = 'SELECT * FROM test LIMIT :limit';\n        break;\n}\n$stmt = $db->prepare($sql);\n$stmt->bindValue('limit', 1, PDO::PARAM_INT);\nif(!($res = $stmt->execute())) var_dump($stmt->errorInfo());\nif(!($res = $stmt->execute())) var_dump($stmt->errorInfo());\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
