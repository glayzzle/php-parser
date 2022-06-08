// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_44861.phpt
  it("PDO Common: Bug #44861 (scrollable cursor don't work with pgsql)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\nif ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'oci') {\n    $from = 'FROM DUAL';\n    $ob = '1';\n} else {\n    $from = '';\n    $ob = 'r';\n}\n$query = \"SELECT 'row1' AS r $from UNION SELECT 'row2' $from UNION SELECT 'row3' $from UNION SELECT 'row4' $from ORDER BY $ob\";\n$aParams = array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL);\n$res = $db->prepare($query, $aParams);\n$res->execute();\nvar_dump($res->fetchColumn());\nvar_dump($res->fetchColumn());\nvar_dump($res->fetchColumn());\nvar_dump($res->fetchColumn());\nvar_dump($res->fetchColumn());\nvar_dump($res->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_ABS, 3));\nvar_dump($res->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_PRIOR));\nvar_dump($res->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_FIRST));\nvar_dump($res->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_LAST));\nvar_dump($res->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_REL, -1));\nvar_dump($res->fetchAll(PDO::FETCH_ASSOC));\n// Test binding params via emulated prepared query\n$res = $db->prepare(\"SELECT ? $from\", $aParams);\n$res->execute(array(\"it's working\"));\nvar_dump($res->fetch(PDO::FETCH_NUM));\n// Test bug #48188, trying to execute again\n$res->execute(array(\"try again\"));\nvar_dump($res->fetchColumn());\nvar_dump($res->fetchColumn());\n?>")).toMatchSnapshot();
  });
});
