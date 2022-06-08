// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_01_open-mb.phpt
  it("SQLite3::open/close tests", function () {
    expect(parser.parseCode("<?php\n$db_file = __DIR__ . DIRECTORY_SEPARATOR . '私はガラスを食べられます.db';\n$db = new SQLite3($db_file);\n//require_once(__DIR__ . '/new_db.inc');\nvar_dump($db);\nvar_dump($db->close());\nunlink($db_file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
