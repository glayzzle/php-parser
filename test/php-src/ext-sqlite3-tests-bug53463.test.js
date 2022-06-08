// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug53463.phpt
  it("Bug #53463 (sqlite3 columnName() segfaults on bad column_number)", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec('CREATE TABLE test (whatever INTEGER)');\n$db->exec('INSERT INTO test (whatever) VALUES (1)');\n$result = $db->query('SELECT * FROM test');\nwhile ($row = $result->fetchArray(SQLITE3_NUM)) {\n    var_dump($result->columnName(0));  // string(8) \"whatever\"\n    // Seems returning false will be most appropriate.\n    var_dump($result->columnName(3));  // Segmentation fault\n}\n$result->finalize();\n$db->close();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
