// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug73333.phpt
  it("Bug #73333 (2147483647 is fetched as string)", function () {
    expect(parser.parseCode("<?php\nif (!defined('PHP_INT_MIN')) define('PHP_INT_MIN', -PHP_INT_MAX-1);\n$db = new SQLite3(':memory:');\n$db->exec('CREATE TABLE foo (bar INT)');\nforeach ([PHP_INT_MIN, PHP_INT_MAX] as $value) {\n    $db->exec(\"INSERT INTO foo VALUES ($value)\");\n}\n$res = $db->query('SELECT bar FROM foo');\nwhile (($row = $res->fetchArray(SQLITE3_NUM)) !== false) {\n    echo gettype($row[0]), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
