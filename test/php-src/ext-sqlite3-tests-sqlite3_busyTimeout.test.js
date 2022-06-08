// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_busyTimeout.phpt
  it("public bool SQLite3::busyTimeout ( int $msecs );", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\nvar_dump($db->busyTimeout(0));\nvar_dump($db->busyTimeout(-1000));\nvar_dump($db->busyTimeout(1000));\n$db->close();\n?>")).toMatchSnapshot();
  });
});
