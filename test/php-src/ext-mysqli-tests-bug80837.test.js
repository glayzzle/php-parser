// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug80837.phpt
  it("Bug #80837 Calling stmt_store_result after fetch doesn't throw an error", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n$mysqli->query('DROP TABLE IF EXISTS test');\n$mysqli->query('CREATE TABLE test (b int)');\n$mysqli->query('INSERT INTO test VALUES (1),(2),(3)');\n$statement = $mysqli->prepare(\"SELECT b FROM test\");\n$statement->execute();\n$statement->bind_result($name);\n$statement->fetch();\ntry {\n    $statement->store_result();\n} catch (mysqli_sql_exception $e) {\n    echo $e->getMessage();\n}\n$mysqli->close();\n?>")).toMatchSnapshot();
  });
});
