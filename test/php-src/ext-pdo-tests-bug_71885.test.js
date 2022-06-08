// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_71885.phpt
  it("PDO Common: FR #71885 (Allow escaping question mark placeholders)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.dirname(__FILE__) . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->exec(\"CREATE TABLE test (a int)\");\n$sql = \"SELECT * FROM test WHERE a ?? 1\";\ntry {\n    $db->exec($sql);\n} catch (PDOException $e) {\n    var_dump(strpos($e->getMessage(), \"?\") !== false);\n}\ntry {\n    $stmt = $db->prepare($sql);\n    $stmt->execute();\n} catch (PDOException $e) {\n    var_dump(strpos($e->getMessage(), \"?\") !== false);\n}\nif ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql') {\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\n}\ntry {\n    $stmt = $db->prepare($sql);\n    $stmt->execute();\n} catch (PDOException $e) {\n    var_dump(strpos($e->getMessage(), \"?\") !== false);\n}\n?>")).toMatchSnapshot();
  });
});
