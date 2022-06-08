// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug79664.phpt
  it("Bug #79664 (PDOStatement::getColumnMeta fails on empty result set)", function () {
    expect(parser.parseCode("<?php\n$pdo = new PDO('sqlite::memory:', null, null, [\n\tPDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n]);\n$stmt = $pdo->query('select 1 where 0');\nif ($stmt->columnCount()) {\n    var_dump($stmt->getColumnMeta(0));\n}\n?>")).toMatchSnapshot();
  });
});
