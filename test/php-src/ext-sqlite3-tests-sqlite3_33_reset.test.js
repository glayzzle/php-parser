// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_33_reset.phpt
  it("SQLite3:: reset", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');\n$db->exec(\"INSERT INTO foo (id, bar) VALUES (1, 'This is a test')\");\n$stmt = $db->prepare('SELECT bar FROM foo WHERE id=:id');\n$stmt->bindValue(':id', 1, SQLITE3_INTEGER);\n$stmt->reset();\n//var_dump($db);\n//var_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
