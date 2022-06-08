// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug_63916.phpt
  it("Bug #63916 PDO::PARAM_INT casts to 32bit int internally even on 64bit builds in pdo_sqlite", function () {
    expect(parser.parseCode("<?php\n$num = 100004313234244; // exceeds 32 bits\n$conn = new PDO('sqlite::memory:');\n$conn->query('CREATE TABLE users (id INTEGER NOT NULL, num INTEGER NOT NULL, PRIMARY KEY(id))');\n$stmt = $conn->prepare('insert into users (id, num) values (:id, :num)');\n$stmt->bindValue(':id', 1, PDO::PARAM_INT);\n$stmt->bindValue(':num', $num, PDO::PARAM_INT);\n$stmt->execute();\n$stmt = $conn->query('SELECT num FROM users');\n$result = $stmt->fetchAll(PDO::FETCH_COLUMN);\nvar_dump($num,$result[0]);\n?>")).toMatchSnapshot();
  });
});
