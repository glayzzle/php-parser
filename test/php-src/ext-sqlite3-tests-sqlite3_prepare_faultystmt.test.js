// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_prepare_faultystmt.phpt
  it("SQLite3::prepare test, testing for faulty statement", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');\n$db->exec(\"INSERT INTO foo (id, bar) VALUES (1, 'This is a test')\");\n$stmt = $db->prepare('SELECT foo FROM bar');\nvar_dump($stmt);\n?>")).toMatchSnapshot();
  });
});
