// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_29_createfunction.phpt
  it("SQLite3::createFunction - Basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$func = 'strtoupper';\nvar_dump($db->createfunction($func, $func));\nvar_dump($db->querySingle('SELECT strtoupper(\"test\")'));\n$func2 = 'strtolower';\nvar_dump($db->createfunction($func2, $func2));\nvar_dump($db->querySingle('SELECT strtolower(\"TEST\")'));\nvar_dump($db->createfunction($func, $func2));\nvar_dump($db->querySingle('SELECT strtoupper(\"tEst\")'));\n?>")).toMatchSnapshot();
  });
});
