// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug77597.phpt
  it("Bug #77597: mysqli_fetch_field hangs scripts", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n$mysqli->query('DROP TABLE IF EXISTS test');\n$mysqli->query('CREATE TABLE test (b int)');\n$mysqli->query('INSERT INTO test VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9)');\n$mysqli->real_query(\"SELECT * FROM test\");\n$result = $mysqli->store_result(MYSQLI_STORE_RESULT_COPY_DATA);\n$field = $result->fetch_field();\nvar_dump($field->name);\n?>")).toMatchSnapshot();
  });
});
