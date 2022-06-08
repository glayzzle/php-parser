// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_72368.phpt
  it("PDO Common: Bug #72368 (PdoStatement->execute() fails but does not throw an exception)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.dirname(__FILE__) . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$params = [\":bar\" => 1];\n$sql = \"SELECT 1\";\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\ntry {\n\t$stmt = $db->prepare($sql);\n\tvar_dump($stmt->execute($params));\n} catch (PDOException $e) {\n\tvar_dump('ERR');\n}\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\ntry {\n\t$stmt = $db->prepare($sql);\n\tvar_dump($stmt->execute($params));\n} catch (PDOException $e) {\n\tvar_dump('ERR');\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
