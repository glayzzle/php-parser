// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug66550.phpt
  it("Bug #66550 (SQLite prepared statement use-after-free)", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');\n$stmt = $db->prepare('SELECT bar FROM foo WHERE id=:id');\n// Close the database connection and free the internal sqlite3_stmt object\n$db->close();\n// Access the sqlite3_stmt object via the php_sqlite3_stmt container\ntry {\n    $stmt->reset();\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
