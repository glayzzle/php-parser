// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug79872.phpt
  it("Bug #79872: Can't execute query with pending result sets", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$stmt = $db->prepare('SET @foo = 1; SET @bar = 2;');\n$stmt->execute();\ntry {\n    var_dump($db->query('SELECT @foo')->fetchAll());\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
