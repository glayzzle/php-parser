// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug63921-32bit.phpt
  it("Bug #63921 sqlite3::bindvalue and relative PHP functions aren't using sqlite3_*_int64 API", function () {
    expect(parser.parseCode("<?php\n$num = PHP_INT_MAX; // 32 bits\n$conn = new sqlite3(':memory:');\n$conn->query('CREATE TABLE users (id INTEGER NOT NULL, num INTEGER NOT NULL, PRIMARY KEY(id))');\n$stmt = $conn->prepare('insert into users (id, num) values (:id, :num)');\n$stmt->bindValue(':id', 1, SQLITE3_INTEGER);\n$stmt->bindValue(':num', $num, SQLITE3_INTEGER);\n$stmt->execute();\n$stmt = $conn->query('SELECT num FROM users');\n$result = $stmt->fetchArray();\nvar_dump($num,$result[0]);\n?>")).toMatchSnapshot();
  });
});
