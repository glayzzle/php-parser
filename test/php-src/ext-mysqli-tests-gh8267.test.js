// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gh8267.phpt
  it("Bug GH-8267 (MySQLi uses unsupported format specifier on Windows)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$mysqli = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$mysqli->query(\"DROP TABLE IF EXISTS foo\");\n$mysqli->query(\"CREATE TABLE foo (id BIGINT UNSIGNED AUTO_INCREMENT, PRIMARY KEY (id))\");\n$mysqli->query(\"INSERT INTO foo VALUES (9223372036854775807)\");\nvar_dump($mysqli->insert_id);\n$mysqli->query(\"INSERT INTO foo VALUES (0)\");\nvar_dump($mysqli->insert_id);\n?>")).toMatchSnapshot();
  });
});
