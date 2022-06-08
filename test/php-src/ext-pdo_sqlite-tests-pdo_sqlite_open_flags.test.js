// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_open_flags.phpt
  it("PDO_sqlite: Testing open flags", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . \"pdo_sqlite_open_flags.db\";\n// Default open flag is read-write|create\n$db = new PDO('sqlite:' . $filename, null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\nvar_dump($db->exec('CREATE TABLE test1 (id INT);'));\n$db = new PDO('sqlite:' . $filename, null, null, [PDO::SQLITE_ATTR_OPEN_FLAGS => PDO::SQLITE_OPEN_READONLY, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\nvar_dump($db->exec('CREATE TABLE test2 (id INT);'));\n?>")).toMatchSnapshot();
  });
});
