// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_filename_uri.phpt
  it("PDO_sqlite: Testing filename uri", function () {
    expect(parser.parseCode("<?php\n// create with default read-write|create mode\n$filename = \"file:\" . __DIR__ . DIRECTORY_SEPARATOR . \"pdo_sqlite_filename_uri.db\";\n$db = new PDO('sqlite:' . $filename);\nvar_dump($db->exec('CREATE TABLE test1 (id INT);'));\n// create with readonly mode\n$filename = \"file:\" . __DIR__ . DIRECTORY_SEPARATOR . \"pdo_sqlite_filename_uri.db?mode=ro\";\n$db = new PDO('sqlite:' . $filename);\nvar_dump($db->exec('CREATE TABLE test2 (id INT);'));\n?>")).toMatchSnapshot();
  });
});
