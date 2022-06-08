// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug66528.phpt
  it("Bug #66528: No PDOException or errorCode if database becomes unavailable before PDO::commit", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$dbh = MySQLPDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$dbh->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);\n$dbh->exec('DROP TABLE IF EXISTS test');\n$dbh->exec('CREATE TABLE test (a int) engine=innodb');\n$dbh->beginTransaction();\n$dbh->exec('INSERT INTO test (a) VALUES (1), (2)');\n$stmt = $dbh->query('SELECT * FROM test');\ntry {\n\t$dbh->commit();\n} catch (PDOException $e) {\n\techo $e->getMessage(), \"\\n\";\n}\ntry {\n\t$dbh->rollBack();\n} catch (PDOException $e) {\n\techo $e->getMessage(), \"\\n\";\n}\ntry {\n    $dbh->setAttribute(PDO::ATTR_AUTOCOMMIT, false);\n} catch (PDOException $e) {\n\techo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
