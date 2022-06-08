// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_43139.phpt
  it("PDO Common: Bug #43139 (PDO ignore ATTR_DEFAULT_FETCH_MODE in some cases with fetchAll())", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n$from = '';\nif ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'oci') {\n    $from = 'from dual';\n} else if ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'firebird') {\n    $from = 'FROM RDB$DATABASE';\n}\nvar_dump($db->query(\"select 0 as abc, 1 as xyz, 2 as def $from\")->fetchAll(PDO::FETCH_GROUP));\n?>")).toMatchSnapshot();
  });
});
