// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug78152.phpt
  it("Bug #78152: PDO::exec() - Bad error handling with multiple commands", function () {
    expect(parser.parseCode("<?php\nrequire_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\nMySQLPDOTest::createTestTable($db);\nvar_dump($db->exec(\"INSERT INTO test(id, label) VALUES (41, 'x'); INSERT INTO test_bad(id, label) VALUES (42, 'y')\"));\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\ntry {\n    var_dump($db->exec(\"INSERT INTO test(id, label) VALUES (42, 'x'); INSERT INTO test_bad(id, label) VALUES (43, 'y')\"));\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
