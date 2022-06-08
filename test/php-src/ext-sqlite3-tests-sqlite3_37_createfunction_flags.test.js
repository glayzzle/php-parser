// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_37_createfunction_flags.phpt
  it("SQLite3::createFunction - Test with flags", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$func = 'strtoupper';\nvar_dump($db->createfunction($func, $func, 1, SQLITE3_DETERMINISTIC));\nvar_dump($db->querySingle('SELECT strtoupper(\"test\")'));\n$func2 = 'strtolower';\nvar_dump($db->createfunction($func2, $func2, 1, SQLITE3_DETERMINISTIC));\nvar_dump($db->querySingle('SELECT strtolower(\"TEST\")'));\nvar_dump($db->createfunction($func, $func2, 1, SQLITE3_DETERMINISTIC));\nvar_dump($db->querySingle('SELECT strtoupper(\"tEst\")'));\n?>")).toMatchSnapshot();
  });
});
